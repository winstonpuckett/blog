---
pagination:
    data: devPosts
    size: 1
    alias: post
permalink: "posts/{{ post.title | removeNonAlphanumericCharacters | slug }}/"
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ post.description | removeQuotes }}">
    <meta name="keywords" content="{{ post.tag_list | listToString }}">
    <meta name="date" content="{{ post.published_at }}">
    <meta name="author" content="{{ devProfile.name }}">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦦</text></svg>">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet">    
    <title>{{ post.title }}</title>
    {% capture googleAnalytics %}{% include components/googleAnalytics.liquid %}{% endcapture %}
    {{ googleAnalytics }}
    {% capture googleAdsense %}{% include components/googleAdsense.liquid %}{% endcapture %}
    {{ googleAdsense }}
</head>
<body>
{% capture css %}{% include css/site.css %}{% endcapture %}
<style>{{ css | cssmin | safe }}</style>

{% capture header %}{% include components/header.liquid %}{% endcapture %}
{{ header }}

<main>
    <img src="{{ post.cover_image }}" alt="this post's header image">
    <h1 class="post__title">{{ post.title }}</h1>
    {{ post.body_markdown | removeMdMetadata }}

<a href="https://dev.to/{{ devProfile.username }}/{{ post.slug }}" rel="noreferrer"  target="_blank">Respond to this post and join the conversation on DEV</a>

<hr>
</main>
<aside>
    {% capture posts %}{% include components/posts.liquid %}{% endcapture %}
    {{ posts }}
</aside>
<footer>
    <p>&copy; all rights reserved.</p>
</footer>
</body>
</html>