/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
import { JS_OUTPUT } from './utils-javascript'
import { TS_OUTPUT } from './utils-typescript'

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send(JS_OUTPUT);
});

app.get('/tsc', (req, res) => {
	res.send(TS_OUTPUT);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
