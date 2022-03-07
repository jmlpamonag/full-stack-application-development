const podcast = [
	{
		/* first: generated podcast ID */
		"podcastID": "",

		/* second: audio identification */
		"title": "",
		"authorID": [ "" ],
		"audio": "",

		/* third: publication identification */
		"publicationJournal": "",
		"publicationDate": "",
		"publicationDOI": "",

		/* fourth: organizational identification */
		"category": "",
		"description": "",
		"keyword": [ "" ]
	}
]

const user = [
	{
		/* first: generated user ID */
		"userID": "",

		/* second: personal identification */
		"firstName": "",
		"lastName": "",

		/* third: account identification */
		"email": "",
		"password": "",
		"type": "",
		"avatar": "",

		/* fourth: optional authorID */
		"authorID": "",

		/* fifth: content curation */
		"savedPodcast": [ ],
		"authorFollowed": [ ]
	}
]

const author = [
	{
		/* first: generated author ID */
		"authorID": "",

		/* second: professional identification */
		"title": "",
		"organization": "",

		/* third: researcher identification */
		"orcid": "",

		/* fourth: account identification */
		"about": ""
	}
]