import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/forum(.*)',
    '/events/:id(.*)',
    '/api/webhooks/clerk(.*)',
    '/api/webhooks/stripe(.*)',
    '/api/uploadthing(.*)',
  ]);

const isIgnoredRoutes = createRouteMatcher([
    '/api/webhooks/clerk(.*)',
    '/api/webhooks/stripe(.*)',
    '/api/uploadthing(.*)',
])
export default clerkMiddleware((auth,req) => {
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};