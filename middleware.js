import { next, rewrite } from '@vercel/functions';

export default function middleware(request) {
    const url = new URL(request.url);
    if (url.hostname !== 'abs.benblaine.org') {
        return next();
    }
    url.pathname = '/abs/';
    return rewrite(url);
}

export const config = {
    matcher: ['/', '/index.html']
};
