# Introduction to FIWARE

Good morning everybody. My name is Jason Fox, I'm the senior Technical Evangelist at the FIWARE Foundation and the
subject of today's webinar is an overview to FIWARE itself. It assumes no prior knowledge of FIWARE and will introduce
all the concepts you need to know.

The learning goals for this particular session are as follows: you will try to understand what is context data in the
realms of FIWARE; how is context data used within smart applications and how can FIWARE help; what is NGSI - it's a term
which is fairly common when you're talking about FIWARE and then finally three things about aspects of FIWARE itself -
the FIWARE catalog FIWARE marketplace and what is the overall role of the FIWARE Foundation itself, because sometimes
the word _"FIWARE"_ can be used to mean the technologies and sometimes it can be meant to be the actual FIWARE
Foundation. As you well know, the Internet has been changing over the years we've gone from very simple client-server
applications through to much more complex and rich ecosystem the idea that you can have interaction with your business
to business or things like social media you would have been completely unknown 5-10 years ago and you can see that the
amount of information we are getting is increasing all the time we've gone from simple b2b moving up to actually getting
people to talk to each other over the web, explain what they're doing and what-have-you and now it's a situation where
machines, devices, robots are able to talk to the internet explain what is going on and this is the idea behind smart
life.

The background to all these things is _"context data"_. Context data describes what is going on where when and why. The
way I prefer to describe it is that there are three vital questions you need to ask any device or any context entity and
these are: _"Who are you?""_ - in other words you must have some sort of unique ID within your system. _"What are
you?"_ - in other words there should be a type of the entity which will describe the data model which holds the data,
and finally you need to ask _"How are you feeling today?"_ - in other words what are the attributes which are associated
this entity. Now there is one obvious attribute which is _"location"_ which is dealt with differently within FIWARE
because that means you can then do things like geofencing and what-have-you but the vast majority of attributes it will
depend entirely on what you actually are - so for example a weather forecast would have the idea of _"temperature"_ or
_"whether it's cloudy"_ or what-have-you whereas a coffee-shop would have a _"location"_ like where it is but also
things like the _"opening times"_ or even possibly the prices of the coffee or what-have-you and with the cars it could
have been a car with the GPS in it would have a _"location"_ or would have a _"number plate"_ and so on and so forth. So
you can see the actual context data will depend on the elements you are talking about rather than being consistent
across all devices - what this means is that we have more and more data which is coming from a wide variety of
locations, a wide variety of sources and we want to make sure that such data is accessible outside of the information
silo. You don't want to have all your mobility data completely separate from all of your building data - you want to be
able to access elements as necessary - you want to be able to get information from additional web services - you want to
be able to get information from social media - you obviously want to get information from IoT as well. It's also
different locations where you can get the information about context.

Now, this means that you have a situation where it is possible to retrieve information over a large amount of data so
you can get a better position on what you should be doing within your smart system. The whole point about a smart
solution is that you need to gather these sources, analyze these sources and then change the real world. The whole point
about a smart solution is that smart solutions are not isolated into a single place - its a case of I have a model of
the world, I modify that model of the world by processing my data saying what should I do next, and thereafter this will
actuate real devices - it will change the state of the world. The state of the world will then be retrieved from sensors
so that it will go back into the system, and you get this feedback to loop across here so you go process, capture -
actually capture, process, actuate, capture, process, actuate so you're constantly changing the state of the smart
solution. That is what is meant by a _"smart solution"_ - as you can see you can get this information in different
domains within the domain of smart cities you would have things like a shop, with a location or business name or a bus,
where its moving around and the driver would change or the number of passengers and how full it is would change but it's
not just about smart cities - it's applicable to multiple verticals you can have the same situation in agri-food where
you could have tractors, which obviously have a location like a bus, with of a location but you could also have crops,
which would have things like the humidity or whatever - you can see that the idea is that you have an entity, which is
covering something. It is covering something in the real world. Finally, another example, you within industry, you could
have tankers, you could have the amount of space and a gas tank and so on and so forth.You can see this can apply to
multiple domains.

So what's the concept of FIWARE? What if there were a standard API for accessing context information? A universal
standard for context information. You will have a situation where if you are supplying data in a neutral standard, you
could have two separate cities (both of these cities happen to have a FIWARE web-based solution) who are offering their
data to third parties, which would then be able to know that the data is in a standard format. So if you, in this case
you're trying to solve the _"final mile problem"_ where you don't know where to go because you don't know where the
parking spaces are or if parking spaces could be defined in a vendor-neutral standard, it doesn't matter what the
low-level sensors are - whether they're different in these two cities - it means that you have an overall idea of this
is how things are overall in this system - so that when your mobile phone goes to one of these two cities, you can say,
okay, switching on where the car parking spaces - tell me what's going on. You can also get a situation where we don't
care within FIWARE what the low level IoT protocol is being used. There are different competing IoT platforms which have
got perfectly valid reasons to exist, because they might be low energy, they might be specific to domains, they might be
solving a specific problem, however, if you can have an overriding context data layer above it - then you can get things
like this one API call which we've got on the top of the screen - saying we can get data by just having stuff on a
well-known endpoint - v2 - entities - slash - then the name of the entity itself, its ID, followed by the rest of the
information. So this is getting the present sensor value of that lamp1 - this URL is part of the NGSI v2 definition,
which is an open API specification for context data. The whole point being that you can use this standard, so you will
be able to retrieve values from a sensor. We're just making a GET request which is obviously very simple if you're a web
developer. Similarly if you want to actuate devices it's just simply a PUT request. It's not difficult to get these sort
of things to happen, we can just switch on a water sprinkler by doing again an NGSI call using HTTP - just a standard
PUT HTTP verb, and it's got a well-known URL saying for this particular attribute, of that particular entity, change
that value. So activation becomes a side-effect effectively of just changing whatever we're doing with the end user
interface. it means you have a very simple API. if we have this situation where you have a common context layer, you are
able to interchange the information around the system quite easily, and you are reducing the silos within our system. So
you have a situation where you can have common authorization policies, you can have possibilities of selling your data
(if you wish) because you'll be doing it from the NGSI standards to whatever data standard you're using for
monetization.

Now the concept here has been picked up by the European Commission and we've been given a rubber stamp as one of the
building blocks for connecting Europe facility - which means that someone out there thinks that actually this idea is
rather good. It's already got a lot of traction in smart cities, we're growing in other verticals as we speak, so it
means that you have a system where there are ways of getting the data which are open to other users rather than have to
do all your development proprietarily in-house. if you are offering your data in this standard, or offering this
interface in a standard, it means that other SMEs, other companies are able to access this data, and do the work for
you. and do the work only once. if you are a SME if you can make your application _"FIWARE ready"_ - in other words it's
able to talk this language - it means you can plug into any system similarly. if you have a processing layer which is
talking NSGI, it can pass information down to devices which are _"FIWARE ready"_ - any device - regardless of the actual
platform so it means that the whole system avoids vendor lock-in. FIWARE has been promoting a public royalty-free
standard for context information management. This is a simple REST API this is NGSI v2, which I've mentioned already
(and obviously with the v2 you can see that there was a v1 it's in the process of adapting as time goes by) The next
generation we call NGSI-LD which adds in linked data concepts, such that you can have one entity, and then you can get
information about another entity from it, so you have a application using this NGSI or FIWARE end user system and you
can get the attributes from elsewhere. Once again you have your entities with your attributes - it's seen as a good idea
this whole NGSI system has been rubber-stamped by a series of relevant standards bodies such as GSMA, CEF which I
mentioned earlier, and the ETSI standard has recently been completed, and this is covering things like mobile operators,
like your configured context data and information for smart cities. Furthermore there are other bodies such as OASC -
we've got a large number of smart cities which are using this thing. In FIWARE we are developing common data models,
such that the information can be passed from one system smoothly to another one - in concert with other standards bodies
like a TM Forum and so on and so forth. And there's more! We have an agreement with IDSA, which is in the robotics
domain for trying to get an open source implementation reference architecture here.

Now, the idea here, is that because we are a middle layer, you need to find the appropriate player in the vertical to
try and help you define the correct interface for that particular domain, because we're not experts in everything - we
are obviously partnering with other systems as necessary. So this is the simple overview as to what the FIWARE web
platform looks like. It consists of normally five blocks where you can get components from the different layers which
can talk to each other. The only mandatory part is you must have a context broker. The context broker receives
information in NGSI v2 format, holds the current context only, and then is able to pass information onto other layers.
You may well want to get your information in using a component - you can send this stuff directly of course if you're
doing HTTP calls and you almost certainly will want to get information out for either processing, visualization analysis
and so and so forth. The other thing which goes in the core layer is that you can do things like data persistence and
short term history and what-have-you, but the only mandatory thing is the context broker, to take the security part as
an example, on the right hand side we keep the security components - obviously you want to have a secure system, but you
don't have to take our security system - you can take an alternative security system. Similarly we have a set of
visualization components, you can easily slot that in. You can just use ours, if it's not appropriate for your system
,you can create a receiving endpoint which will then do your own visualization. It's not all about _"take the whole
lot"_ - just take the bits you need, but all you really need is a context broker. The context broker holds the current
state of the overall smart system. This is the current set of FIWARE generic enablers. These are the free bits of
software. The items in yellow are the incubated enablers, which are in the process of being accepted within the
community. The items in white are full members who have achieved a certain level of traction within FIWARE. As you can
see we have a wide range of elements across the entire system and I will go into detail with some of them going forward.
You can see we've got things like big data analysis, we've got things like getting a connection to robots, document
exchange, getting information from Internet of Things and so on and so forth. Looking in the core area, apart from the
context broker itself, we have got several elements which are used for putting data into databases or to retrieve
information on short term history so you can get a timeline. You can get information on trends, or you can get
information posted into a large number of different databases. Again if you want this sort of thing, you just take it
off the shelf, plug it in, it'll work in five minutes. For Comet, which the short-term history element you can get a
timeline. There's an alternative for Comet called Quantum Leap which will do it into a Crate-DB rather than a MongoDB
database, similarly there is an alternative to Cygnus called Draco which will use Apache NIFI rather than Apache Flume -
as I said even within our system it's not _"take everything"_ - you take the bits you want if you're an expert in Flume
then obviously you'd prefer Cygnus - it's up to you. Coming in from the bottom we need to be able to cope with
proprietary systems, other IoT platforms so on and so forth and the way this is done is through creating a series of IoT
agents. An IoT agent talks whatever language it is, whatever format it is below the line from the South port. For
example OPC-UA is an example, but on the north port it talks pure NGSI v2 ,so it is a translation layer, you know, which
can be configured using an API as you'd expect. So it's a microservice, and it can also talk through various different
transports - you can either talk directly using HTTP, you can use MQTT, you can use Rabbit MQ and of course there are a
wide range and growing range of IoT platforms which are supported. So this is our way of getting around the standards of
the IoT level in other words we stay on top. We also have the ability to get data out of stream information video
information this is the Kurento component. with Kurento you would be able to retrieve a video stream and then look into
the images so that you can actually get some context data out of it. It also does a large number of other elements which
are not strictly speaking context data related, but within our system you'd want to get context in and out of your data.
With any of these systems you want to be able to display and then activate the system and one of the components here is
called Wirecloud. Wirecloud is a mash-up visualization tool which reads the data from the NGSI format and then puts it
out in whichever graphically pleasing method you want. You're able to add in additional custom widgets as necessary, so
that and you can share them as well, so that you can get the data in the right format, so you can make the right
analysis. Another more extensive tool is Knowage, this is a business intelligence suite, which again you're able to
retrieve the data and do a wide range of queries based on what is the state of our smart system. Furthermore, we are
able to connect to big data - as you would expect you're able to extract out data and put it into some sort of system
for big data analysis. You may well be in a situation where you want to be able to sell the your data. Your data is
valuable, and obviously you need to have sovereignty on it, and you need to be able to make money as necessary, and give
people access as necessary. The components here are extended CKAN and the business framework API. The business framework
will take the money for you, extended CKAN will offer your data set as a CKAN data set, but it is actually the current
context data which is in the system - so that you are able to pass information out to other systems.

Now as I said, we have a series of access control components, where as you would expect you make a request of some sort,
there is some sort of gatekeeping components (this is Wilma which is a PEP proxy - which is a policy execution point in
the jargon) and that will then talk to an IDM which is an identity manager saying _"okay, who is this?"_ because they
have already supplied some sort of token in their request the IDM will give information including roles or including the
name of the person what have you, and then you can either ask Keyrock to adjudicate or more likely for a complex
scenario you can ask Authzforce to adjudicate which is a policy decision point saying _"based on the information I have,
should I let this user through or not?"_ It's a fairly standard architecture for securing your services - in the case
where you were doing monetization, what you would need to do is, you set up the system where you would have a PEP proxy
in front of the accounting framework, which would say _"can this user get hold of this thing?"_ - _"is he going to let
this GET request be allowed through?""_ and then once information is being passed to the proxy it would also then get
the business framework to talk to CKAN. CKQN would then also request the information saying _"is this OK? am I really
allowed to send this out?"_ and then pass the information on. So you can see that the various components we have are
able to talk amongst themselves to cover the scenarios which are required of it. We have a series of developer

<!-- textlint-disable -->

information on our website - if there any questions beyond the webinar today the answer is usually on fiware.org.

<!-- textlint-enable -->

Now for our reference architecture - we take that five box system - obviously deployment is not necessary for these
architecture, and again you have the context broker there in the middle - which is receiving data from the data
acquisition layer, and then you are processing on the top. With in this particular diagram we're doing an agricultural
system - as you can see you get information from your machines or from your crops it goes through the adaption layer -
so that means that it's no longer proprietary stuff - it's NGSI and from the context broker onwards everything is NGSI,
and covers our system so you can use our access control to let people in or out if it's necessary, and then we can talk
to other processing layers on top so we can also retrieve information from third parties, such as weather web services
to augment the existing context information. So that when you are receiving the information on the top layer, you've got
an overall view of the context, not just or not necessarily just what's in the devices themselves. You will see that the
reference architecture is very similar depending on which system you are looking at. There are various examples of
systems out there which are already using FIWARE. they are already _"FIWARE ready"_. This is an example in the cities
domain which is a _"FIWARE ready"_ solution which is able to retrieve noise information - obviously that would then be
changed in NGSI and it will be pushed on the screen in an appropriate manner - again you've got visualization it's the
same thing. You have other examples of FIWARE, which would be say, using industry or preventative maintenance - once
again you have elements which are things like GPS or you have devices in the in the vehicle which would then be able to
pass that as context information up to the system and you do appropriate processing. Similarly there are elements in the
agricultural domain where you could have a collar around the an animal and that once again would give you information
using the say the sigfox IoT agent which passes information up into the context data . You'd know where your animals
are, even how they are feeling and you are protecting your assets. ... and again another one - with the idea of trying
to make sure that your information in the silo is passed into the system it's a method of analyzing grain silos to see
how much it is left in there and it's just purely battery-powered ... and there's more stuff at the FIWARE health domain
as well. You can see that we are covering a wide range of areas. We can also use FIWARE as the basis of a
system-of-systems approach because we are able to retrieve information from other contexts brokers - as information
which is relevant for my entity - so I can augment my entity with information from other systems. So we can take
information from, say a silo, a pest management system and so on and so forth to come up with an overall integrated
version of the farm. Within smart cities again, it's the same architecture - you've got the Orion context broker in the
middle, you've got your devices at the bottom, you've got your IoT agent in the middle and you've got your governing
system the top - obviously it's either at the top where you've got the processing stuff all right at the bottom where
you will be able to supply your unique intellectual property so that's where companies are able to make you make money
out of this system .. and for same similar picture and factory - similar picture everything is coming in the same idea -
you have your devices at the bottom - you have some sort of translation layer, you get the context broker and keep
moving it up to the processing layer. So, I've already mentioned the stuff about the car navigators, but the point here
is that you can actually get information coming out in a fashion that other users, other third-party users, are able to
go retrieve.

So we're not just about the technology. The FIWARE Foundation is about promoting this technology and covers a wider
range of elements than just doing the technology itself. Ee don't actually create the software ourselves, we are
promoting and doing it. We are trying to create a sustainable ecosystem here, which is obviously from a wide variety of
users. We offer a marketplace which is usable for any system which is _"powered by FIWARE"_ or _"FIWARE ready"_.
_"Powered by FIWARE"_ means that you've got something using the context broker. _"FIWARE ready"_ means that you're able
to connect to the context broker. You can see that solutions are able to go end-to-end, but you're also able to offer
information about devices, so you can say, this device will plug into any FIWARE solution. And of course you can also

<!-- textlint-disable -->

offer training or consultancy services and so on and so forth. There is also the FIWARE lab. It is a experimental area

<!-- textlint-enable -->

where you can actually upload and fiddle around with your architecture for free and we have another area called FIWARE
Mundus which is doing things worldwide and there are a series of FIWARE iHubs where you can get technical information
local to you and we have accelerator program. In summary, there are six areas - the overall mission is to create this
sustainable ecosystem around these royalty-free things using these five pillars. So that is FIWARE. In summary:
_"context data"_ represents the state of a physical or conceptual object which exists in the real world. You have smart
solutions which are able to read information from sensors and other sources and analyze that information to actuate
devices - this is a continuous feedback loop. _"FIWARE"_ itself is an open source initiative, which we are driving the
definition of the universal set of standards for context data management - if you haven't got context data in your
system you shouldn't use us, use somebody else.

Now, the name of this standard is called _"NGSI v2"_, and it is vendor-neutral so that no one company has got control of
it. That is why we are a spin-off Foundation and it is usable for all interactions within the FIWARE technology. FIWARE
also has a catalog which is a curated framework of open-source platform components which can be added to one another and
you only take the bits you want, so you get free software and the right bit of free software for you, and the only one
which is essential is the context broker. You can use other components, you can use third-party components to cover that
area - and the whole point here is to accelerate the development of your smart solution. You don't have to write
everything from scratch you can get 90% of it for free. Once you've created a solution we have a marketplace, which is
able to promote your existing commercial offerings. ... and the FIWARE Foundation, which is a legally independent body
is able to protect FIWARE itself and it has these five pillars of the FIWARE lab, the iHubs, the Accelerator, Mundus and
everything else which has been there covered this morning. So that, in summary, is a brief introduction to FIWARE, and I
thank you very much and I hope you have a good day.
