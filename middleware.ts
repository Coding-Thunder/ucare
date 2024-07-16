import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { _routes } from "./constants";

const protectedRoutes = createRouteMatcher([
    _routes.book_your_test_today
    // "/meeting(.*)"
])

export default clerkMiddleware((auth, req) => {
    if (protectedRoutes(req)) {
        auth().protect()
    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};