import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const Cards = (props) => {
  return (
    <div>
      <CardDeck>
        <Card>
          <CardImg top width="25%" src="http://photos.harstatic.com/23216792/hr/img-13.jpeg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Playground</CardTitle>
            <CardSubtitle>Do Not Break your Neck</CardSubtitle>
            <CardText>Hodor hodor - HODOR hodor, hodor hodor; hodor hodor hodor! Hodor! Hodor hodor, HODOR hodor, hodor hodor hodor hodor?! Hodor! Hodor hodor, hodor; hodor hodor - hodor? Hodor! Hodor hodor, hodor; hodor hodor; hodor hodor... Hodor hodor hodor? Hodor, hodor hodor?! Hodor. Hodor hodor HODOR hodor, hodor hodor, hodor. Hodor hodor - hodor.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="25%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dolphins_show.PNG/256px-Dolphins_show.PNG" alt="Card image cap" />
          <CardBody>
            <CardTitle>Water Park</CardTitle>
            <CardSubtitle>Slip n Slide!</CardSubtitle>
            <CardText>Lateen sail line ahoy yawl barque topmast nipperkin Privateer warp list. Swing the lead Plate Fleet lanyard hulk aye shrouds Gold Road run a shot across the bow brig schooner. Cable killick parrel Yellow Jack Jack Tar hail-shot jolly boat bilge gibbet splice the main brace. Gold Road draught yard code of conduct fluke dance the hempen jig matey wench ballast dead men tell no tales.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="25%" src="http://www.tourisme-haut-vallespir.com/wp/wp-content/uploads/2015/03/tennis-et-mini-golf-Montferrer.gif" alt="Card image cap" />
          <CardBody>
            <CardTitle>Mini Golf</CardTitle>
            <CardSubtitle>Throw a golf ball at your friends!</CardSubtitle>
            <CardText>Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.</CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <CardImg top width="25%" src="http://www.madeira-hotel.org/indexet/madeira/location/image/calomar3.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>The Beach</CardTitle>
            <CardSubtitle>Toes in the Water!</CardSubtitle>
            <CardText>Austin lo-fi polaroid iceland knausgaard fixie etsy irony bicycle rights bespoke put a bird on it. Jean shorts locavore migas, distillery hashtag sartorial la croix cloud bread jianbing bitters photo booth. IPhone photo booth post-ironic trust fund, yr vexillologist 90s. Stumptown plaid edison bulb, fam knausgaard YOLO fashion axe chia migas pickled. Poke flannel distillery taiyaki tumeric godard stumptown adaptogen succulents williamsburg cornhole narwhal kale chips.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="25%" src="https://www.radio6.fr/photos/moyen/26673.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Bowling Alley</CardTitle>
            <CardSubtitle>Get Drunk with strangers!</CardSubtitle>
            <CardText>Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Even the worst thing we can do here is good. You don't have to be crazy to do this but it does help. Pretend you're water. Just floating without any effort. Having a good day. Remember how free clouds are. They just lay around in the sky all day long. Life is too short to be alone, too precious. Share it with a friend. Lets do it again then, what the heck.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="25%" src="http://www.theentertainmentcontractor.com/uploads/simulator2.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Theme Park</CardTitle>
            <CardSubtitle>Loser Kids!</CardSubtitle>
            <CardText>Cupcake ipsum dolor sit amet sesame snaps jelly sweet jelly. Chocolate cake candy canes danish jelly-o. Cupcake I love wafer biscuit topping. I love gingerbread jujubes cotton candy I love. Wafer caramels I love. Fruitcake tootsie roll chocolate marshmallow jelly cake halvah bonbon. Apple pie tiramisu liquorice chupa chups I love. Dragée I love carrot cake croissant dessert chocolate bar biscuit. Toffee ice cream biscuit croissant biscuit cheesecake icing cookie candy. Candy canes sweet chocolate bar. Caramels gingerbread marzipan ice cream jelly beans. Halvah chocolate bar apple pie biscuit tiramisu fruitcake jelly-o tiramisu topping. Chocolate icing wafer tootsie roll I love fruitcake topping donut fruitcake. Wafer jelly-o cheesecake tiramisu ice cream pie muffin.</CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
