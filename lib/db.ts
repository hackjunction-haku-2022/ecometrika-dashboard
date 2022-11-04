require('dotenv').config();

import { URL } from 'url';
import { groupBy } from 'lodash';
import { MongoClient } from 'mongodb';

const dbClient = new MongoClient(process.env.DB_URL as string);

dbClient.connect();

export interface PulseValue {
    id: string;
    value: number;
}

export interface PulseDocument {
    domain: string;
    path: string;
    timestamp: number;
    value: number;
}

export interface SiteDocument {
    url: string;
    timestamp: number;
}

const WATCH_TIMEOUT = 3 * 60 * 1000;

const pulseCollection = dbClient.db().collection<PulseDocument>('pulse');
const siteCollection = dbClient.db().collection<SiteDocument>('site');

export async function addPulse(pulseValue: PulseDocument) {
    const site = await siteCollection.findOne({});

    if (!site) {
        return;
    }

    if (site.timestamp + WATCH_TIMEOUT < Date.now()) {
        console.log("Outdated timestamp", site, pulseValue);
        return;
    }

    const url = new URL(site.url);
    const value = { ...pulseValue, timestamp: Date.now(), domain: url.host, path: url.pathname };

    console.log("Add pulse", value);
    await pulseCollection.insertOne(value);
}

export async function getPulseByDomain() {
    return groupBy(await pulseCollection.find({}).toArray(), "domain");
}


export function getSite() {
    return siteCollection.findOne({});
}

export async function updateSite(siteValue: SiteDocument) {
    console.log("Update site", siteValue);
    return siteCollection.updateOne({}, { $set: { ...siteValue, timestamp: Date.now() } }, { upsert: true });
}