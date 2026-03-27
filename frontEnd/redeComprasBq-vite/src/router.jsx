import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/index';
import DetailsScreen from './pages/detailsScreen/index';


const Login = () => <div style={{color: 'white', padding: '50px'}}>Página de Login (Em breve)</div>;

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Inicial (Vitrine de Uniformes e Armários) */}
                <Route path="/" element={<Home />} />

                {/* Rota para ver detalhes de um item específico (ex: /details/123) */}
                <Route path="/details/:id" element={<DetailsScreen />} />

                {/* Rota de Login */}
                <Route path="/login" element={<Login />} />

                {/* Se o usuário digitar qualquer coisa errada, volta para a Home */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}