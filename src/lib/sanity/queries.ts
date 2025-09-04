export const allServices = `*[_type=="service"]{title, "slug": slug.current, summary} | order(title asc)`;
export const serviceBySlug = `*[_type=="service" && slug.current==$slug][0]{title, body}`;

export const allProjects = `
*[_type=="project"]|order(year desc, title asc){
  title, "slug": slug.current, clientType, location, year, hero
}`;

export const projectBySlug = `
*[_type=="project" && slug.current==$slug][0]{
  title, clientType, location, year, hero, gallery, highlights, body
}`;
