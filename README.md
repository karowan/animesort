This app will get all anime that started airing on TV in any given season and will let you rank them against each other to get a definitive ranking. A deployed version of the app can be found at https://animesort.herokuapp.com/
______
## How to use
Simply select which year and season you want to rank shows in and press submit. The earliest season available is 1990.
You will then be presented a list of shows. Select which shows you watched then press submit.
Once you press submit, you will be presented with two options. Pick the better of the two options until all shows are in their proper position.

### For developers who want to use this
If you have your own database of shows you want to sort, remove Selection.tsx and create a list of objects with the following properties: `url`, `title`, `image_url`. Once you have that list, create a new Main component assigning your list to the `showList` property and everything should work properly.
