import { AuthLayout } from "components/layout/auth";
import AuthPage from "pages/auth";
import { Route, Routes } from "react-router-dom";


export const Routing = () => {
	return (
		<Routes>
			<Route path="/sign-in" element={<AuthPage />} />
			<Route element={<AuthLayout />}>
				<Route path="/" element={<div>hello</div>}>
				</Route>
				
			</Route>
		</Routes>
	);
};
