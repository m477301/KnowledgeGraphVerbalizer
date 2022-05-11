
# Knowledge Graph Verbalizer
This Knowledge graph verbalizer is desIgned to verbalize wikidata queries and was done as part of a project by trinity college students.

# Video Demo
https://user-images.githubusercontent.com/23319263/163379200-39694829-a351-46cf-9850-5b3fd984def9.mp4

# Docker Deployment
A `Dockerfile` is available at the directory root for a quick and easy deployment. To enjoy the interface, the following two commands should be run:

```
docker build -t verbalisation .                         # To build the container the first time.
docker run -p 3000:3000 -p 3500:3500 -it verbalisation  # To run the tool.
```

Finally, open a Web-browser on `localhost:3000/` to enjoy it!

Note: This should work with Docker version **19** and more.

# Local Setup
In order to setup the environment locally you must use two seperate terminals, one to set up the website and one to setup the server.
How to do so is explained below.

## Website Setup

Open a terminal at the root folder of the repo.
First we cd into the website folder
`cd website`

We then install on dependencies using
`npm install`

If you alread have yarn installed you can check by using
`npm --version`

We then enter the following to begin
`npm start`

## Server Setup

Open a terminal at the root folder of the repo.
We first cd into the folder rosae-server
`cd rosae-server`

We then use the following install the node programs
`npm install`

We then use the command below to activate the server
`npm start`

# Possible Improvements
- Improved verbalisations
- More dynamic search queries
- Better visualisation of the knowledge graph

# Licensing
MIT License
The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility

## Team Members
The team consisted of Matteo Mcguinness, Jamie McEvoy, Aaron Readman, Paddi Hua, Mark Healy, Cianna MacMahon and Jason Wood and was supervised by Damien Graux and Fabrizio Orlandi.
