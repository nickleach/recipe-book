# Recipe Book

> A mobile app built with React-Native

## Development

### Prerequisites
* [Node js](http://nodejs.org/) and NPM
* [React-Native](https://facebook.github.io/react-native/docs/getting-started.html)
* Latest version of xCode

#### Getting Started
* Make sure you have everything above installed then fork the repo, clone it and run `npm install`.
* Once that's finished (should take a while), go to the `ios` folder and open up the .xcodeproj file.
* In the upper left corner select your device and press play.
* Make sure a separate terminal window opens up, if it doesn't you may need to stop and start it again. The first build usually takes a while so after the processes finish click on the iPhone simulator and press `cmd + r`.
* With the simulator still open press `cmd + d` and click on `Enable live reload` and `Debug in chrome`

#### References
* [Egghead Course](https://egghead.io/series/react-native-fundamentals)
* [React-Native Docs](https://facebook.github.io/react-native/docs/getting-started.html)
* React native uses flex box so if you're unfamiliar with it this is a great reference https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Workflow
* First fork then clone your copy
* Navigate to the root folder in your terminal then add a remote repo with `git remote add <name you want to call it> <link to original repo>` most people call the remote "upstream"
* `git fetch upstream` to fetch the latest code. Then `git merge upstream/master` to merge it into yours. Fetch often and always fetch before you make a pull request
* When you're ready to submit code push it up to your personal remote repo then click `New Pull Request`
