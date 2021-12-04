import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from './pages/public/loginPage'
import { AboutPage } from './pages/public/aboutPage'
import { PlanPage } from './pages/public/planPage'
import { Error404 } from './pages/public/error404'
import { LandingPage } from './pages/public/landingPage'
import { InternalLayout } from './components/layout/internalLayout'
import { IngredientList } from './pages/product/ingredientList'
import { InventoryPage } from './pages/product/inventoryPage'
import { RecipeList } from './pages/product/recipeList'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plans" element={<PlanPage />} />

        <Route path="/internalLayout" element={<InternalLayout />} >
          <Route path="/internalLayout/ingredients" element={<IngredientList />} />
          <Route path="/internalLayout/inventory" element={<InventoryPage />} />
          <Route path="/internalLayout/recipe" element={<RecipeList />} />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
