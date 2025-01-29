// middleware.ts
import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Define public routes that don't require authentication
  publicRoutes: [
    "/",
    "/events/:id",
  ],
  // Define routes that should bypass middleware completely
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing"
  ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
