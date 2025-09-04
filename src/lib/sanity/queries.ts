export const allServices = `*[_type=="service"]{title, "slug": slug.current, summary} | order(title asc)`;
export const serviceBySlug = `*[_type=="service" && slug.current==$slug][0]{title, body}`;
