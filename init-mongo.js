db.getSiblingDB("unifi").createUser({user: "unifi", pwd: "7276Bellshiregate", roles: [{role: "dbOwner", db: "unifi"}]});
db.getSiblingDB("unifi_stat").createUser({user: "unifi", pwd: "7276Bellshiregate", roles: [{role: "dbOwner", db: "unifi_stat"}]});