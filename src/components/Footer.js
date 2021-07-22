import React from  "react";

export default function Footer() {
    return(
        <footer className="bg-gray-800 md:sticky bottom-0">
            <div className="container mx-auto flex justify-center items-center text-center grid grid-rows-2">
                <div className="ml-3 text-xl">
                    Made with ❤️ and React
                </div>
                <div className="flex">
                    <a href="https://github.com/corgimaman/"><img src="https://img.icons8.com/nolan/64/github.png"/></a>
                    <a href="mailto:ida.shalilian@gmail.com"><img src="https://img.icons8.com/nolan/64/apple-mail.png"/></a>
                    <a href="tel:281-241-9374"><img src="https://img.icons8.com/nolan/64/phone.png"/></a>
                    <a href="https://www.linkedin.com/in/ida-s-86b21b68/"><img src="https://img.icons8.com/nolan/64/linkedin.png"/></a>
                </div>
            </div>
        </footer>
    );
}