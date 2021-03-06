const { create } = require('../utils/dom')
const { 
	setPageTitle, 
	setPageDescription,
	setPageDefaultDescription } = require('../utils/page')
const Article = require('../components/Article')
const ErrorPage = require('../components/ErrorPage')

const Detail = (props) => {
	const id = props.route.params.id
	const article = props.feeds.reduce((selected, feed) => {
		return feed.id == id ? feed : selected
	}, null)
	let detail
	if (article !== null) {
		detail = Article(article) 
		setPageTitle(props.appName, article.title)
		setPageDescription(article)
	} else {
		const message = "Oop! There's nothing here"
		detail = ErrorPage({
			title: 'Oops!',
			description: "There's nothing here...",
			actionText: 'Back to Home',
			actionLink: '/'
		})
		setPageTitle(props.appName, message)
		setPageDefaultDescription(message)
	}
	return detail
}

module.exports = Detail
