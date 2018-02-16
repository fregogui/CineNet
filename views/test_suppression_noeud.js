state=1;
svg.on("click",function(){
  console.log("y");
  if (state==1){
  simulation.stop();
  state=0;

    trackID=network.nodes[0].id
    network.links = network.links.filter(function(l) {
  return l.source ===trackID ||  l.target === trackID;
});
network.nodes.splice(0,1);

  node = node.data(network.nodes);
  link = link.data(network.links);


  console.log(network);
}
else if (state==0){
simulation.restart();
state=1;
}
})
