import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Dashboard = lazy(() => import('./Dashboard')) 
const SignUp = lazy(() => import('./SignUp')) 
const SignIn = lazy(() => import('./SignIn')) 
const Send = lazy(() => import('./Send')) 

export function Container() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/signup' element= {<Suspense fallback={'loading...'}> <SignUp/> </Suspense>} />
                <Route path = '/signin' element= {<Suspense fallback={'loading...'}> <SignIn/> </Suspense>} />
                <Route path = '/dashboard' element= {<Suspense fallback={'loading...'}> <Dashboard/> </Suspense>} />
                <Route path = '/send' element= {<Suspense fallback={'loading...'}> <Send/> </Suspense>} />
            </Routes>
        </BrowserRouter>
    )
}