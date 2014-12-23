How to Hack a Christmas Tree
===========

## Get started

The is two programs available
* light-sequence.js - controls a sequence of pins
* light-twitter.js - controls a sequence of pins based on twitter hash tag

## Install

Run

````
npm install galileo-io
npm install twit
````

or by using package.json

````
npm install
````

## Run the programs through wyliodrin

1. Signup at wyliodrin.com and follow the instructions to setup your Galileo board by creating a new micro sd image
2. Create a new blank project
3. Copy the code into the editor and hit "Run application on" button

#### Note

To run the light-twitter.js you need to populate the following variables in the code from your twitter accounts credentials

````
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
````

## Blog post

Have you ever hacked a Christmas Tree? Well we at CoderDojo did just that! CoderDojo members from the age of 8 transformed two bare 4 foot artificial Christmas Trees into programmable devices which people could from all over the world could interact with and control.

2014 has been the year of Robotics in CoderDojo DCU and we wanted to end the year with a wow! Earlier this year we joined forces with Intel to run a pilot in providing Galileo boards to 6 dojos across Ireland. Using the Intel Galileo has proved a big hit and has so far excited and engaged the members. The Christmas Tree Hack was born.

So how did this crazy idea come about? In late November I was talking with our hardware and robot guru Alan Donnelly about how we could wrap 2014 with a Christmas party that would excite, engage, educate and wow the members in a way we have never done before.  

The Intel Galileo boards have enabled us bring the content at CoderDojo DCU to a new level by mixing both hardware and software. Making real objects move through hardware and code has really excited and engaged the members.

On December 13th, 80 members of created the coolest and most technical Christmas tree in Ireland. To do this we ordered programmable lights, 250 LED's and Baubles (sorry the baubles got lost and arrived to late), the members used  Intel's Galileo board to control and programmable decorations they created. The ordinary had become extraordinary!

On the day, members started cutting wire, adding LED’s to their decorations, wiring them up to and hooking them into the Galileo boards. Once this was done they were then programmed these using Node.js. To program the Galileo boards the members used an excellent online editor called wyliodrin. Wyliodrin made programming the Galileo Boards less complex and was the ideal platform to use.

For anyone interesting in doing this at home. We wrote two programs. The first one (https://github.com/CoderDojoDCU/hackthechristmastree/blob/master/light-sequence.js) programmed a light sequence to activate. The second piece of code (https://github.com/CoderDojoDCU/ hackthechristmastree/blob/master/light-twitter.js) interacted with twitter and searched for a specific trend #ChristmasTreeHack. If tweets were found with this hashtag it would control the full Christmas tree in a sequence. By the end of session the Christmas tree was reading tweets and triggering sequences from it. This was Ireland's first ever fully programmable and social Christmas tree, and it was great that it was powered by the Irish designed Galileo Board.

What made the day special, was each member contributed. The members may have had a background in Scratch to Robotics to Gaming. But on the day, they were all one. Boys and girls were learning how to create electric circuits, I/O wiring and hooking them up to Galileo Boards. It was a day of creativity and fun that will live in our memories for years to come. It was so inspiring seeing the enthusiasm of the members and then witness them collaborate and create.

I have been involved in CoderDojo for 3.5 years. For me personally, it was so special to see the parents and members work together to create this unique Christmas Tree. I am always amazed and inspired at how the members challenge us to always to think outside of the box to engage them. This is what makes CoderDojo DCU special.

I would like to thank Alan Donnelly for his hard work and contribution. Without his vision, this day could not have happened. 

I want to give a huge shout out to our supporters that made this day possible. 

First, Dublin City University has been our home for the last 2.5 years. They have supported  countless ideas we've had and helped us explore new avenues. In the early days of CoderDojo, DCU stood up to support the movement and provided an amazing learning space which has enabled us to educate over 100 students each week the art of coding, creativity and technology.

Like Dublin City University, Intel has supported CoderDojo from very early on and our latest joint effort in the Galileo Pilot offers such potential to our young audience. Coding is an important skill, but to be able to mix it with electronics hardware like the Intel Galileo significantly increases the potential for learning and creativity of every CoderDojo member. That members from the age of 8 are able to interact and program these boards is truly inspiring. With the level of ideas and engagement with these boards I cannot wait to see what amazing projects members create with the Galileo boards during 2015.

I also want to thank wyliodrin for providing us with a pro account for their awesome platform for programming Galileo boards, it makes programming the boards very accessible for both the members and the mentor team.

The Christmas Party wrapped up an excellent 2014 and I cannot wait to see what is created and achieved at CoderDojo DCU in 2015.  Merry Christmas to you all.
