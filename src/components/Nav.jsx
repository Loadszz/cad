import Link from 'next/link'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'

const Nav = ({ className }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<nav className={className}>
			<ul className={className}>
				<li className='raleway-semibold leading-[24px] text-[14px] text-white'><Link href='#'>{t('header.navigation-1')}</Link></li>
				<li className='raleway-semibold leading-[24px] text-[14px] text-white'><Link href='#'>{t('header.navigation-2')}</Link></li>
				<li className='raleway-semibold leading-[24px] text-[14px] text-white'><Link href='#'>{t('header.navigation-3')}</Link></li>
				<li className='raleway-semibold leading-[24px] text-[14px] text-white'><Link href='#'>{t('header.navigation-4')}</Link></li>
				<li className='raleway-semibold leading-[24px] text-[14px] text-white'><Link href='#'>{t('header.navigation-5')}</Link></li>
			</ul>
		</nav>
	)
}

export default Nav