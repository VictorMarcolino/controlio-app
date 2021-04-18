default:
	expo start
upload:
	expo upload:android --latest
android-release:
	expo build:android -t app-bundle && \
	expo upload:android --key ~/google-key.json --use-submission-service --latest && \

