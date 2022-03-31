CRUD

Create : HTTP POST /api/devices + payload
res => 201+location

Read   : HTTP GET /api/devices
res => 200+ payload

Update : HTTP PUT /api/devices/1 + payload
res => 200

Delete : HTTP DELETE /api/devices/1
res => 200