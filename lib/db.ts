require('dotenv').config();

import { MongoClient } from 'mongodb';

const dbClient = new MongoClient(process.env.DB_URL as string);

dbClient.connect();

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

const pulseCollection = dbClient.db().collection<PulseDocument>('pulse');
const siteCollection = dbClient.db().collection<SiteDocument>('site');

export async function addPulse(pulseValue: PulseDocument) {
    await pulseCollection.insertOne({ ...pulseValue, timestamp: Date.now() });
}

export function getSite() {
    return siteCollection.findOne({});
}

export async function updateSite(siteValue: SiteDocument) {
    siteCollection.updateOne({}, { $set: { ...siteValue, timestamp: Date.now() } }, { upsert: true });
}