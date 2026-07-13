import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import { WalletProvider } from './context/WalletContext'
import App from './App'
import './styles/index.css'

const arcadeTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorPrimary: '#2f8cff',
        colorBgBase: '#071426',
        colorBgContainer: '#132a43',
        colorBgElevated: '#183451',
        colorBorder: '#294763',
        colorText: '#f7fbff',
        colorTextSecondary: '#b7c9d9',
        colorSuccess: '#35d06f',
        colorWarning: '#ffb21c',
        colorError: '#ff4d5f',
        colorInfo: '#30d5ff',
        borderRadius: 8,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    components: {
        Button: {
            primaryColor: '#f7fbff',
            colorPrimaryHover: '#57a5ff',
        },
        Input: {
            colorBgContainer: '#132a43',
            colorBorder: '#294763',
            activeBorderColor: '#2f8cff',
        },
        InputNumber: {
            colorBgContainer: '#132a43',
            colorBorder: '#294763',
        },
        Tabs: {
            colorBgContainer: '#132a43',
            itemSelectedColor: '#f7fbff',
            itemColor: '#b7c9d9',
        },
        Card: {
            colorBgContainer: '#132a43',
            colorBorderSecondary: '#294763',
        },
        Slider: {
            colorPrimaryBorderHover: '#2f8cff',
            handleColor: '#2f8cff',
            trackBg: '#2f8cff',
            trackHoverBg: '#57a5ff',
        },
        Tooltip: {
            colorBgSpotlight: '#183451',
        },
    },
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigProvider theme={arcadeTheme}>
            <BrowserRouter>
                <WalletProvider>
                    <App />
                </WalletProvider>
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>
)
