# CineNet Project
Authors : [Antonio De Jesus Montez](https://github.com/ADJMLyon) | [Nicolas Lefebvre](https://github.com/Nicocolabricot) | [Guillaume Fregosi](https://github.com/fregogui)
The purpose of this project is to show the relations between the nominees of the Oscare 2018. Using a network graph, we want to highlight the interaction between them.


## General presentation

For this visualisation, we chose to represent the nominees with a nide and each collaboration between since 2012 with a link. Each node's color represents the Oscare the person is nominated for.

<table border="0">
  <tr>
    <td>
      <img src="img/base.PNG" style="width: 100px;">
    </td>
  </tr>
  <tr>
    <td align="center">
      General visualization.
    </td>
  </tr>
</table>

You can watch a video presenting this project and its feature or read the text below. [Video Description](https://www.youtube.com/watch?v=furStaGw6vQ&feature=youtu.be)
The data was taken from [api.themoviedb.org](https://www.themoviedb.org/) and we have coded a node.js script to get the data we want from this API. See the [script](https://github.com/fregogui/CineNet/blob/master/collect-data/collectData.js)

## Installation

### Easy to use:

You can directly visualize the network chart online: [Cine Net](https://fregogui.github.io/CineNet/views/network.html)

### Use local installation:

You can clone our repository and follow these different steps :

Download [node.js](https://nodejs.org/).

**Collect the data**

After cloning the repository, use theses command lines :
```
cd CineNet/collect-data
cp config.secrets.sample.json config.secrets.json
```
Then, open the `config.secrets.json` file and put your `api_key` from [The Movie Database](https://www.themoviedb.org/) in the correct field.
Then,  use theses commands line 
```
npm install
npm start
```
You will see the file `database.json` in `CineNet/collect-data/data/`.

*If you want more detail about the data collect and the data parsing, you can read : [DATA.md](https://github.com/fregogui/CineNet/blob/master/DATA.md) and [PROCESSING.md](https://github.com/fregogui/CineNet/blob/master/PROCESSING.md)*

**Start the local server**

In CineNet repository, run :
```
npm start
```
Go to [http://localhost:3101/network](http://localhost:3101/network)


## Functionalities

### Placement

As many nodes are displayed and linked, we introduced three kind of forces to place the nodes :
<ul>
    <li>A radial one to scatter the nodes</li>
    <li>A repulsive one to prevent them from being to close to each other</li>
    <li>A centering one for them to stay around the center of the screen</li>
    <li>An attractive one between the linked nodes</li>
</ul>

We also made the nodes staying in a framework for them not to go out of the screen.

As you can see, the number of nodes and links are making the visualization difficult to understand. That's the reason why we tried to mainly work on the interaction between the user andthe visualization.

### Nodes functionalities

If the user is interested in a particular node, he can just move its mouse over it. Then :
<ul>
    <li>appears a tooltip in the bottom right of the screen, displaying the name of the corresponding person and his nominations</li>
    <li>this person's network is highlighted while the other links and nodes get clear: the names of his collaborators next to the corresponding nodes, the links between them and the name of the movies they worked on together are displayed</li>
</ul> 

By clicking on the node, the network is selected until he clicks on this node again : his network is the only one appearing. The user can then move his mouse over the other nodes connected to learn more about them.

<table border="0">
  <tr>
    <td>
      <img src="img/mouse_over1.png" style="width: 100px;">
    </td>
<td>
      <img src="img/mouse_click.PNG" style="width: 100px;">
    </td>
  </tr>
  <tr>
    <td align="center">
      Mouse over a node
    </td>
<td align="center">
      After clicking on a node
    </td>
  </tr>
</table>

The user can also drag the nodes to rearrange the network.

### Checkbox

We also added a checkbox allowing the user to select the information displayed.

First, he can choose to suppress the labels on the links when moving the mouse on a node. Indeed, when the linked nodes are too close, it can be hard to distinguish the labels and the visualization becomes foggy.

<table border="0">
  <tr>
    <td>
      <img src="img/with_labels.png" style="width: 100px;">
    </td>
<td>
      <img src="img/without_labels.png" style="width: 100px;">
    </td>
  </tr>
  <tr>
    <td align="center">
      With the labels
    </td>
<td align="center">
      Without the labels
    </td>
  </tr>
</table>

He can also choose to display only some kinds of nominees. Indeed he can just move his mouse over the corresponding checkbox category to highlight people from this category's network. He can click on it to display only people from this category (not their network).
He is also able to select or deselect all of them with the "All" checkbox.

<table border="0">
  <tr>
    <td>
      <img src="img/mouse_over_checkbox.png" style="width: 100px;">
    </td>
<td>
      <img src="img/checkbox_selection.PNG" style="width: 100px;">
    </td>
  </tr>
  <tr>
    <td align="center">
      Mouse over a checkbox
    </td>
<td align="center">
      Checkbox selection
    </td>
  </tr>
</table>

### Search bar

Finally, if the user is interested in somebody in particular, he can use the search bar on the top of the screen to write his name. Some propositions are displayed when he starts to write the name to make him save time.

<table border="0">
  <tr>
    <td>
      <img src="img/searchbar.png" style="width: 100px;">
    </td>
  </tr>
  <tr>
    <td align="center">
      Nominees selection thanks to the search bar
    </td>
  </tr>
</table>

### Last updates

The last updates are listed on [UPDATE.md](https://github.com/fregogui/CineNet/blob/master/UPDATE.md).

## Interesting results

We can see that some people collaborated on many movies with a single person, usually the directors or producers. Thats leads us to think that these persons are in a way the favorites of their boss.


## Next feature

* It would possible to rank people following the number of people they collaborated with and these people importance, someway like the Google's PageRank algorithm. This would highlight who are the most influent nominees.
* Add online collect with customizable request
* Intelligent position of the name of the artist depending of the position of the nodes and the links (more readability)



