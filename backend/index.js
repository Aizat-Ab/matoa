const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('../public/dataBase.json');
const db = low(adapter);


db.get('watches').push({id: 33, imageUrl: 'dfsdfsd'}).write();
