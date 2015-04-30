module.exports = function() {

  // initialize servers store if doesn't exist
  localStorage.servers = localStorage.servers || "[]";

  // function to save servers into localStorage
  function save() {
    localStorage.servers = JSON.stringify(servers);
  }

  // default servers
  var defaultServers = [
    {name: 'LattyCraft', ip: 'us.latty.info', port: 25565}
  ];

  // load servers from localstorage
  var servers = JSON.parse(localStorage.servers);


  // if no servers are saved, load the default ones
  if (!servers || servers.length === 0) {
    servers = defaultServers;
    save();
  }


  return {
    get: function() {
      return servers;
    },
    select: function(id) {
      return servers[id];
    },
    add: function(server) {
      servers.push(server);
      save();
    },
    delete: function(index) {
      servers.splice(index, 1);
      save();
    }
  };

};