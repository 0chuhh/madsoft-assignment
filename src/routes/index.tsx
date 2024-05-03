import { AuthLayout } from "components/layout/auth";
import AuthPage from "pages/auth";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const TestListPage = lazy(() => import("pages/tests/"));
const TestDetailPage = lazy(() => import("pages/tests/detail/"));


export const Routing = () => {
	return (
		<Routes>
			<Route path="/sign-in" element={<AuthPage />} />
			<Route element={<AuthLayout />}>
				<Route path="/tests" element={<TestListPage />} />
				<Route path="/tests/:testId" element={<TestDetailPage />} />
			</Route>
			<Route path="/*" element={<Navigate to={'/tests'}/>} />
		</Routes>
	);
};
