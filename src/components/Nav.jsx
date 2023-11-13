import Link from 'next/link'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'

const Nav = ({ className }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<nav className='w-full lp:mb-[50px]'>
			<ul className={className}>
				<li className='nav-link'>
					<Link href='#'>{t('header.navigation-1')}</Link></li>
				<li className='nav-link'>
					<Link href='#'>{t('header.navigation-2')}</Link></li>
				<li className='nav-link'>
					<Link href='#'>{t('header.navigation-3')}</Link></li>
				<li className='nav-link'>
					<Link href='#'>{t('header.navigation-4')}</Link></li>
				<li className='nav-link'>
					<Link href='#'>{t('header.navigation-5')}</Link></li>
			</ul>
		</nav>
	)
}

export default Nav