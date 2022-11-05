import axios from "axios";
import React, { useEffect, useState } from "react";
import { PulseChart } from "../../../charts/PulseChart";


const stubs = [
  {
      "_id": "636699679839d89f55cbd242",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668327139,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366995d9839d89f55cbd241",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667668317075,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636699539839d89f55cbd240",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667668307146,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636699499839d89f55cbd23f",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667668297151,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366993f9839d89f55cbd23e",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667668287135,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636699359839d89f55cbd23d",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668277071,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366992b9839d89f55cbd23c",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667668267140,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636699219839d89f55cbd23b",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667668257140,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636699179839d89f55cbd23a",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668247120,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366990d9839d89f55cbd239",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667668237127,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636699039839d89f55cbd238",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667668227151,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698f99839d89f55cbd237",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667668217109,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698ef9839d89f55cbd236",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667668207107,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698e59839d89f55cbd235",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667668197096,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698db9839d89f55cbd234",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667668187102,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698d19839d89f55cbd233",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668177118,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698c79839d89f55cbd232",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668167049,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698bd9839d89f55cbd231",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667668157141,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698b39839d89f55cbd230",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667668147109,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698a99839d89f55cbd22f",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667668137130,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366989f9839d89f55cbd22e",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667668127080,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698959839d89f55cbd22d",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667668117116,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366988b9839d89f55cbd22c",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667668107081,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698819839d89f55cbd22b",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668097054,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698779839d89f55cbd22a",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667668087134,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366986d9839d89f55cbd229",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667668077135,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698639839d89f55cbd228",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668067108,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698599839d89f55cbd227",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667668057040,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366984f9839d89f55cbd226",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667668047132,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698459839d89f55cbd225",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668037111,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366983b9839d89f55cbd224",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667668027095,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698319839d89f55cbd223",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667668017064,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698279839d89f55cbd222",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667668007104,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366981d9839d89f55cbd221",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667997096,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698139839d89f55cbd220",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667987053,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636698099839d89f55cbd21f",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667977083,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697ff9839d89f55cbd21e",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667967071,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697f59839d89f55cbd21d",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667667957098,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697eb9839d89f55cbd21c",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667667947088,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697e19839d89f55cbd21b",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667937073,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697d79839d89f55cbd21a",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667927108,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697cd9839d89f55cbd219",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667917085,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697c39839d89f55cbd218",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667907066,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697b99839d89f55cbd217",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667897049,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697af9839d89f55cbd216",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667887133,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697a59839d89f55cbd215",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667877049,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366979b9839d89f55cbd214",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667867106,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697919839d89f55cbd213",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667857096,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697879839d89f55cbd212",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667847052,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366977d9839d89f55cbd211",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667837066,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697739839d89f55cbd210",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667827082,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697699839d89f55cbd20f",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667817057,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366975f9839d89f55cbd20e",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667807010,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697559839d89f55cbd20d",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667797059,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366974b9839d89f55cbd20c",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667787048,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697419839d89f55cbd20b",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667777054,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697379839d89f55cbd20a",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667767053,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366972d9839d89f55cbd209",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667757041,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697239839d89f55cbd208",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667747022,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697199839d89f55cbd207",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667667737045,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366970f9839d89f55cbd206",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 66,
      "timestamp": 1667667727051,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366970f9839d89f55cbd205",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 68,
      "timestamp": 1667667727050,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366970f9839d89f55cbd204",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 71,
      "timestamp": 1667667727040,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366970f9839d89f55cbd203",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 70,
      "timestamp": 1667667727036,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366970f9839d89f55cbd202",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 70,
      "timestamp": 1667667727030,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697059839d89f55cbd201",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 70,
      "timestamp": 1667667717077,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697059839d89f55cbd200",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 70,
      "timestamp": 1667667717076,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697059839d89f55cbd1ff",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 72,
      "timestamp": 1667667717070,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697059839d89f55cbd1fe",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 69,
      "timestamp": 1667667717069,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636697059839d89f55cbd1fd",
      "id": "6D769079-418D-4B5A-B751-FC10DFF2699C",
      "value": 70,
      "timestamp": 1667667717050,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636696fb9839d89f55cbd1fc",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667707024,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636696df9839d89f55cbd1fb",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667679696,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636696d59839d89f55cbd1fa",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667669639,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636696cb9839d89f55cbd1f9",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667659560,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636696c19839d89f55cbd1f8",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667649593,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636696b79839d89f55cbd1f7",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667639651,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366969978bc835efab8d02e",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667609571,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366968f78bc835efab8d02d",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667599599,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366968578bc835efab8d02c",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667589568,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366967b78bc835efab8d02b",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667579540,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366967178bc835efab8d02a",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667569578,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366966778bc835efab8d029",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667559565,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366965d78bc835efab8d028",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667549584,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366965378bc835efab8d027",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667539577,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366964978bc835efab8d026",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667529527,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366963f78bc835efab8d025",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667519545,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366963578bc835efab8d024",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667509506,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366962b78bc835efab8d023",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667499546,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366962178bc835efab8d022",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667489574,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366961778bc835efab8d021",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667479535,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366960d78bc835efab8d020",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667667469479,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366960378bc835efab8d01f",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667459537,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695f978bc835efab8d01e",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667449519,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695ef78bc835efab8d01d",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667439520,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695e578bc835efab8d01c",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667429504,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695db78bc835efab8d01b",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667419518,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695d178bc835efab8d01a",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667409499,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695c778bc835efab8d019",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667399443,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695bd78bc835efab8d018",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667389466,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695b378bc835efab8d017",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667379466,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636695a978bc835efab8d016",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667369476,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366959f78bc835efab8d015",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667359469,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366959578bc835efab8d014",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667349481,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366958b78bc835efab8d013",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667667339454,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366958178bc835efab8d012",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667329458,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366957778bc835efab8d011",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667319469,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366956d78bc835efab8d010",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667309460,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366956378bc835efab8d00f",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667299463,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366955978bc835efab8d00e",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667289379,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366954f78bc835efab8d00d",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667279433,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366954578bc835efab8d00c",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667269433,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366953b78bc835efab8d00b",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667259411,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366953178bc835efab8d00a",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667249412,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366952778bc835efab8d009",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667667239415,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366951d78bc835efab8d008",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667229389,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366951378bc835efab8d007",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667219316,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366950978bc835efab8d006",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667209399,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694ff78bc835efab8d005",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667199386,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694f578bc835efab8d004",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667189398,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694eb78bc835efab8d003",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667667179358,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694e178bc835efab8d002",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667169345,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694d778bc835efab8d001",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667159372,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694cd78bc835efab8d000",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667149376,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694c378bc835efab8cfff",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667667139377,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694b978bc835efab8cffe",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667129357,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694af78bc835efab8cffd",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667119404,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636694a578bc835efab8cffc",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667109312,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366949b78bc835efab8cffb",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667099351,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366949178bc835efab8cffa",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667089333,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366948778bc835efab8cff9",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667079340,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366947d78bc835efab8cff8",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667667069320,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366947378bc835efab8cff7",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667059319,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366946978bc835efab8cff6",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667667049312,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366945f78bc835efab8cff5",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667667039257,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366945578bc835efab8cff4",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667667029335,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366944b78bc835efab8cff3",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667667019322,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366944178bc835efab8cff2",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667667009292,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366943778bc835efab8cff1",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666999260,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366942d78bc835efab8cff0",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666989295,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366942378bc835efab8cfef",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666979269,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366941978bc835efab8cfee",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666969376,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366940f78bc835efab8cfed",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666959425,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366940578bc835efab8cfec",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666949419,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693fb78bc835efab8cfeb",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666939418,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693f178bc835efab8cfea",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666929349,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693e778bc835efab8cfe9",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666919399,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693dd78bc835efab8cfe8",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666909399,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693d378bc835efab8cfe7",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666899369,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693c978bc835efab8cfe6",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666889345,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693bf78bc835efab8cfe5",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666879360,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693b578bc835efab8cfe4",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666869366,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693ab78bc835efab8cfe3",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666859362,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636693a178bc835efab8cfe2",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667666849342,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366939778bc835efab8cfe1",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666839380,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366938d78bc835efab8cfe0",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666829347,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366938378bc835efab8cfdf",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666819296,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366937978bc835efab8cfde",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666809341,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366936f78bc835efab8cfdd",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666799389,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366936578bc835efab8cfdc",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666789288,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366935b78bc835efab8cfdb",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666779309,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366935178bc835efab8cfda",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666769319,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366934778bc835efab8cfd9",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666759344,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366933d78bc835efab8cfd8",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666749241,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366933378bc835efab8cfd7",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666739321,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366932978bc835efab8cfd6",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666729322,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366931f78bc835efab8cfd5",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666719307,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366931578bc835efab8cfd4",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666709296,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366930b78bc835efab8cfd3",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666699323,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366930178bc835efab8cfd2",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666689320,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692f778bc835efab8cfd1",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666679269,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692ed78bc835efab8cfd0",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666669267,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692e378bc835efab8cfcf",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666659240,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692d978bc835efab8cfce",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666649321,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692cf78bc835efab8cfcd",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666639217,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692c578bc835efab8cfcc",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666629257,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692bb78bc835efab8cfcb",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666619258,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692b178bc835efab8cfca",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666609265,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636692a778bc835efab8cfc9",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666599248,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366929d78bc835efab8cfc8",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666589258,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366929378bc835efab8cfc7",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666579256,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366928978bc835efab8cfc6",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666569158,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366927f78bc835efab8cfc5",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666559257,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366927578bc835efab8cfc4",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666549197,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366926b78bc835efab8cfc3",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666539192,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366926178bc835efab8cfc2",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666529189,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366925778bc835efab8cfc1",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666519195,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366924d78bc835efab8cfc0",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666509241,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366924378bc835efab8cfbf",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666499137,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366923978bc835efab8cfbe",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666489230,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366922f78bc835efab8cfbd",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667666479170,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366922578bc835efab8cfbc",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666469184,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366921b78bc835efab8cfbb",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666459089,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366921178bc835efab8cfba",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666449167,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366920778bc835efab8cfb9",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666439173,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691fd78bc835efab8cfb8",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666429147,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691f378bc835efab8cfb7",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666419171,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691e978bc835efab8cfb6",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666409156,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691df78bc835efab8cfb5",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667666399136,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691d578bc835efab8cfb4",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666389143,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691cb78bc835efab8cfb3",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666379136,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691c178bc835efab8cfb2",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666369140,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691b778bc835efab8cfb1",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666359124,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691ad78bc835efab8cfb0",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666349065,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636691a378bc835efab8cfaf",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666339098,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366919978bc835efab8cfae",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666329101,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366918f78bc835efab8cfad",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666319120,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366918578bc835efab8cfac",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666309088,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366917b78bc835efab8cfab",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666299086,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366917178bc835efab8cfaa",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666289072,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366916778bc835efab8cfa9",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667666279025,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366915d78bc835efab8cfa8",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666269067,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366915378bc835efab8cfa7",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667666259071,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366914978bc835efab8cfa6",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666249069,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366913e78bc835efab8cfa5",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666238996,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366913578bc835efab8cfa4",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666229055,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366912b78bc835efab8cfa3",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666219102,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366912178bc835efab8cfa2",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666209063,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366911778bc835efab8cfa1",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666199040,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366910d78bc835efab8cfa0",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666189032,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366910278bc835efab8cf9f",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666178998,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690f878bc835efab8cf9e",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666168996,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690ef78bc835efab8cf9d",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666159041,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690e478bc835efab8cf9c",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666148986,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690db78bc835efab8cf9b",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666139016,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690d078bc835efab8cf9a",
      "id": "Unknown",
      "value": 74,
      "timestamp": 1667666128950,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690c678bc835efab8cf99",
      "id": "Unknown",
      "value": 71,
      "timestamp": 1667666118999,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690bd78bc835efab8cf98",
      "id": "Unknown",
      "value": 69,
      "timestamp": 1667666109017,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690b378bc835efab8cf97",
      "id": "Unknown",
      "value": 67,
      "timestamp": 1667666099012,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "636690a878bc835efab8cf96",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666088978,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366909e78bc835efab8cf95",
      "id": "Unknown",
      "value": 68,
      "timestamp": 1667666078986,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366909478bc835efab8cf94",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666068987,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366908a78bc835efab8cf93",
      "id": "Unknown",
      "value": 70,
      "timestamp": 1667666058957,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366908078bc835efab8cf92",
      "id": "Unknown",
      "value": 66,
      "timestamp": 1667666048984,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366907678bc835efab8cf91",
      "id": "Unknown",
      "value": 72,
      "timestamp": 1667666038929,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "6366906c78bc835efab8cf90",
      "id": "Unknown",
      "value": 73,
      "timestamp": 1667666028908,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "63668f9a78bc835efab8cf8f",
      "id": "B3FC4098-5FA6-4745-94FA-1088EC21D93B",
      "value": 78,
      "timestamp": 1667665818475,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "63668f9078bc835efab8cf8e",
      "id": "B3FC4098-5FA6-4745-94FA-1088EC21D93B",
      "value": 78,
      "timestamp": 1667665808476,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "63668f8678bc835efab8cf8d",
      "id": "B3FC4098-5FA6-4745-94FA-1088EC21D93B",
      "value": 60,
      "timestamp": 1667665798489,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "63668f7c78bc835efab8cf8c",
      "id": "B3FC4098-5FA6-4745-94FA-1088EC21D93B",
      "value": 60,
      "timestamp": 1667665788454,
      "domain": "meduza.io",
      "path": "/"
  },
  {
      "_id": "63668f7278bc835efab8cf8b",
      "id": "B3FC4098-5FA6-4745-94FA-1088EC21D93B",
      "value": 60,
      "timestamp": 1667665778455,
      "domain": "meduza.io",
      "path": "/"
  }
].reverse();


export default function DemoPulseGraph({wrapperClass}: {wrapperClass: string;}) {
  const [data, setData] = useState<any>(null);
  const [chart, setD3chart] = useState<any>(null);
  const [siteName, setSitename] = useState('');

  const getData = async function() {
    const st = (i = 0, data: any = []) => setTimeout(() => {
      data = ([ {
        date: new Date(stubs[i].timestamp),
        value: +stubs[i].value
      }, ...data]);
      console.log('data', data)
      setData(data);
  
      if(stubs[i + 1]) {
        st(i + 1, data);
      }
    }, 1000);
    return st();
  };


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (chart) {
      console.log('paintNewPoint', data)
      chart.add(data);
    }

    if (data && !chart) {
      console.log('#1', data);
      const d3Chart = new PulseChart('.' + wrapperClass, data, siteName)
      setD3chart(d3Chart);
      d3Chart.create();
    }
  }, [data, chart]);

  return (
    <div className={wrapperClass}></div>
  );
}
