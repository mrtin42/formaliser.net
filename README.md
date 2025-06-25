> # FORMALISER.net has been deprecated ⚠️
> 
> The project has been commonly marked as spam by email providers and is thus not worth maintaining any longer.

<a href="https://beta.formaliser.net/">
    <img src="https://formaliser.net/readme.png" alt="FORMALISER.NET" align="center" width="100%">
</a>
<h1 align="center">FORMALISER.NET</h1>
<a href="https://beta.formaliser.net/">FORMALISER.NET</a> is a free service powered by Next.js and Vercel. It's a simple backend that parses and sends HTML forms to your email, without any frontend code. It's a great solution for your personal website, blog, or any other static website.

## Get Started
1. Create a form on your website with the action attribute set to `https://formaliser.net/send?to=your@emailaddress.com` replacing your@emailaddress.com with your actual email. ensure the method is set to POST, else form data will not be sent and we cannot send.
```html
<form action="https://beta.formaliser.net/send?to=your@emailaddress.com" method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="Email">
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Send</button>
</form>
```

2. Thats literally it. 

## Features
- No frontend code required
- We don't store any data
- No ads
- No tracking
- No cookies
- No bullshit
### Coming soon
- Configuration using hidden form fields (e.g rate limiting, email subject, etc)
- Tying emails to domains (e.g. only allowing forms from yourdomain.com to be sent to your email, preventing spam)
- Custom domains
- support for file uploads
- support for multiple recipients


## Soo.. why is it free?
because why bloody not.<br>premium tiers may be added in the future, but essential features will always be free.

## Tech Stack
- Framework: [Next.js](https://nextjs.org/)
- Hosting: [Vercel](https://vercel.com/)
- Mail servers: [Resend.com](https://resend.com/)
- CSS: [Tailwind CSS](https://tailwindcss.com/)
- HTML Emails: [react-email](https://react.email)
- Mailing library: [Nodemailer](https://nodemailer.com/about/)

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## Bugs
If you find any bugs, please open an issue, email us at [info@formaliser.net](mailto:info@formaliser.net), or if you want to flex, fix it yourself and submit a pull request. whichever you prefer, it will be greatly appreciated.

## License
[MIT](/LICENSE)

## Contact
- Email: [info@formaliser.net](mailto:info@formaliser.net)
- Twitter: created by [@t_ub3](https://twitter.com/t_ub3)
- Website: [formaliser.net](https://formaliser.net)

