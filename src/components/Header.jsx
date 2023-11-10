import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import LanguageSwitcher from './ui/LanguageSwitcher'

const Header = () => {
	return (
		<header className='absolute w-full py-[18px] z-10'>
			<div className="wrapper">
				<div className='flex justify-between items-center relative'>
					<div className='flex flex-col items-center'>
						<a href='/'>
							<Image
								src={'./images/logo.svg'}
								alt='logo'
								width={163}
								height={58}
								className='mb-[6px]'
							/>
							<Image
								src={'./images/consulting-and-audit.svg'}
								alt='sub-logo'
								width={162}
								height={12}
							/>
						</a>
					</div>
					<Nav className='flex gap-[32px] justify-center items-center w-full' />
					<div>
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header