import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

function Header() {
    const { isDark } = useContext(ThemeContext)
    return (
        <header style={{ background: isDark ? 'black' : 'lightgray', color: isDark ? 'white' : 'black' }}>
            <h1>홍길동님 안녕하세요</h1>
        </header>
    )
}

function Content() {
    const { isDark } = useContext(ThemeContext)

    return (
        <div style={{ background: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black' }}>
            <p style={{}}>좋은 하루 되세요</p>
        </div>
    )
}

function Footer() {
    const { isDark, setIsDark } = useContext(ThemeContext)

    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <div>
            <button onClick={toggleTheme}>다크모드/라이트모드</button>{' '}
        </div>
    )
}
export default Page
