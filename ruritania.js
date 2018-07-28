#!/usr/bin/env node
"use strict";
const ruritania = require('commander');
const initializeWorld = require('./builders/world').buildWorld;
const add = require('./builders/menu').beginAdd;
const build = require('./build').renderWiki;
ruritania.version('0.0.4')
  .description('Ruritania worldbuilding CLI');

ruritania.command('render')
  .alias('r')
  .description('render world data into html')
  .action(build)

ruritania.command('add')
  .alias('a')
  .description('add aspect to your world')
  .action(add)

ruritania.command('create')
  .alias('c')
  .description('create a new Ruritania world')
  .action(initializeWorld)

ruritania.parse(process.argv);