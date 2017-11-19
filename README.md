# React Video Player

### Run the app

```
> npm install
> npm start
```

### App Structure

**Components**
The project have 4 main component:
 - `SearchBar`
 - `VideoDetail`
 - `VideoList`
 - `VideoListItem`


**State**

```
 this.state = {
   videos : []
   selectedVideo: null,
 }
```

The app takes search the videos from youtube with `youtube-api-search`
