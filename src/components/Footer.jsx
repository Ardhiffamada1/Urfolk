import React from 'react'

const Footer = () => {
    return(
        <footer class="p-4 bg-transparent shadow md:flex md:items-center md:justify-between md:p-6 ">
		<span class="text-sm text-earie sm:text-center ">© 2023 <a href="#" class="hover:underline" target="_blank">URFOLK</a>. All Rights Reserved.
    </span>
		<ul class="flex flex-wrap items-center mt-3 sm:mt-0">
			<li>
				<a href="#" class="mr-4 text-sm hover:underline md:mr-6 text-earie">About</a>
			</li>
			<li>
				<a href="#" class="mr-4 text-sm hover:underline md:mr-6 text-earie">Tracking Your Orders</a>
			</li>
			<li>
				<a href="#" class="mr-4 text-sm hover:underline md:mr-6 text-earie">Payment</a>
			</li>
			<li>
				<a href="#" class="text-sm hover:underline text-earie">Support</a>
			</li>
		</ul>
	</footer>
    )
}

export default Footer