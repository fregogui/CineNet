# Data Processing

Une fois les données récupérées et stockées brut dans un .json, nous devons les formater spécifiquement pour être exploitées sur les fonctions de D3.JS.

## Structure

Nous devons trier nos données aux travers de noeuds et de liens. Pour rappel, un noeud correspond à un nominé aux Oscars et un lien correspond à un film où deux nominées ont collaborés.

### Format :
```json
{
  "nodes": [
    {"id": "id_node"},
  ],
  "links": [
    {"source": "id_node", "target": "id_node", "id":"id_link"},
  ]
}
```


## Code Formatage :

La fonction suivante nous permet de formater nos données brut vers le format désiré :

```javascript
function format_to_network(data){
  n=data.length;
  network={"nodes":[],"links":[]}
  for (var i=0;i<n;i++){
    actor={};
    actor.name=data[i].name;
    actor.id=data[i].id;
    network.nodes.push(actor);
    credtis_i=[];
    credits_i=data[i].credits.crew.concat(data[i].credits.cast);
    movies_i=[];
      for (var j=i+1;j<n;j++){
      movies_j=[];
      credits_j= data[j].credits.crew.concat(data[j].credits.cast);
        for (var l=0;l<credits_i.length;l++){
          for (var m=0;m<credits_j.length;m++){
            if (movies_i.includes(credits_i[l].id)==false && movies_j.includes(credits_j[m].id)==false && credits_i[l].id===credits_j[m].id){
              link={};
              movies_i.push(credits_i[l].id);
              movies_j.push(credits_j[m].id);
              link.source=data[i].id;
              link.target=data[j].id;
              link.movie=credits_i[l].original_title;
              link.movie_id=credits_i[l].id;
              network.links.push(link);
            }
          }
        }
    }
    }
    return network;
}
```
