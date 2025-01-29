// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'
 
export default clerkMiddleware({
  afterAuth(auth, req) {
    // Public routes that don't require authentication
    const publicRoutes = ["/", "/events/:id"];
    const isPublicRoute = publicRoutes.some((route) => 
      req.nextUrl.pathname === route || 
      req.nextUrl.pathname.match(new RegExp(`^${route.replace(/:id/, '[^/]+')}$`))
    );

    if (isPublicRoute) {
      return;
    }

    // If the user is not signed in and the route is private, redirect them to sign in
    if (!auth.userId) {
      const signInUrl = new URL('/sign-in', req.url);
      return Response.redirect(signInUrl);
    }
  },
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing"
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};