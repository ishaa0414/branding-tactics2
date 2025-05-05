// // src/context/CaseStudyContext.js
// import { Video } from 'lucide-react';
// import React, { createContext, useContext, useState } from 'react';

// // Initial clients data
// const clientsData = [
//     {
//         id: 1,
//         name: "Genki",
//         videoUrl:"https://youtu.be/_ZxpRl-4ppc",
//         logoUrl:"/client logo/logo1.png",
//         description: "Founded by Harshit Bharti in Gumla, Genki is a fashion brand designed for Gen Z. We strategically named the brand Genki, a Japanese-inspired name, to evoke a sense of exclusivity and foreign quality, positioning it as something beyond the local market. This approach successfully created the perception of Genki as an international brand, resonating with its target audience. To complement this vision, we designed a custom type logo with adaptive lockups, ensuring a dynamic and versatile identity that aligns with the brand’s modern appeal.",
//         centerImg: "/case-study/genki/genki-center.png",
//         top1img:"/case-study/genki/genki-top1.png",
//         top2img:"/case-study/genki/genki-top2.png",
//         bottomLeftImg:"/case-study/genki/genki-bottom-left.png",
//         bottomRightImg:"/case-study/genki/genki-bottom-right.png",
//         bottomCenter1:"/case-study/genki/genki-bottom-center1.png",
//         bottomCenter2:"/case-study/genki/genki-bottom-center2.png",
//         industry: "Technology",
//         serviceProvided: "Brand Transformation",
//         challenge: "Outdated brand identity that didn't reflect their innovative solutions.",
//         solution: "Complete brand overhaul with modern design language and strategic positioning.",
//         results: "45% increased brand recognition and 28% boost in qualified leads."
//       },
//       {
//         id: 2,
//         name: "Dad's Sparrow",
//         videoUrl:"https://youtu.be/nMFkVmgP14M",
//         logoUrl:"/client logo/logo2.png",
//         description: "Founded by Yoga Vaishnav from Chennai, Dad’s Sparrow was built to redefine filter coffee as a mindful ritual, encouraging people to pause, savor, and connect. Rooted in freedom and authenticity, the brand’s identity draws from the sparrow’s fleeting movement, symbolizing cherished moments and exploration. We designed a logo mark where minimal bird silhouettes form a coffee flower, reflecting both growth and the organic beauty of coffee culture.Every design choice reinforces Dad’s Sparrow as the only filter coffee brand dedicated to crafting a slow, meaningful coffee experience, making every sip a celebration of life’s simple joys.",
//         centerImg: "/case-study/dad sparrow/ds-center.png",
//         top1img:"/case-study/dad sparrow/ds-top1.png",
//         top2img:"/case-study/dad sparrow/ds-top2.png",
//         bottomLeftImg:"/case-study/dad sparrow/ds-bottom-left.png",
//         bottomRightImg:"/case-study/dad sparrow/ds-bottom-right.png",
//         bottomCenter1:"/case-study/dad sparrow/ds-bottom-center1.png",
//         bottomCenter2:"/case-study/dad sparrow/ds-bottom-center2.png",
//         industry: "Finance",
//         serviceProvided: "Visual Identity Redesign",
//         challenge: "Legacy financial institution struggling to appeal to younger demographic.",
//         solution: "Fresh visual identity that maintained trust while introducing modern elements.",
//         results: "38% increase in millennial customer acquisition."
//       },
//       {
//         id: 3,
//         name: "Elara",
//         videoUrl:"https://youtu.be/pa23xeK9svE",
//         logoUrl:"/client logo/logo3.png",
//         description: "Elara, a luxury handloom brand founded by Sainath and Brahmani from Hyderabad, blending heritage, sustainability, and modern sophistication. Developed a comprehensive brand identity, including logo design, typography, tone of voice, and positioning strategy, ensuring alignment with its ethos of understated elegance and cultural authenticity. Crafted a cohesive visual and strategic foundation to establish Elara as a premium brand rooted in Indian craftsmanship while appealing to a global, design-conscious audience.",
//         centerImg: "/case-study/elara/elara-center.png",
//         top1img:"/case-study/elara/elara-top1.png",
//         top2img:"/case-study/elara/elara-top2.png",
//         bottomLeftImg:"/case-study/elara/elara-bottom-left.png",
//         bottomRightImg:"/case-study/elara/elara-bottom-right.png",
//         bottomCenter1:"/case-study/elara/elara-bottom-center1.png",
//         bottomCenter2:"/case-study/elara/elara-bottom-center2.png",
//         industry: "Healthcare",
//         serviceProvided: "Brand Strategy",
//         challenge: "New healthcare startup with limited brand recognition in competitive market.",
//         solution: "Distinctive positioning strategy focusing on patient-first approach.",
//         results: "Secured Series A funding within 8 months of rebrand launch."
//       },
//       {
//         id: 4,
//         name: "Khet",
//         videoUrl:"https://youtu.be/XeEd0c1GOyQ",
//         logoUrl:"/client logo/logo4.png",
//         description: "Khet, a unisex perfume brand by Madhav Narang and Arhum Jain, needed a brand identity that balanced nostalgia and modernity while remaining gender-neutral. The challenge was to create a luxurious yet emotionally rich aesthetic that felt timeless.This strategic blend of vintage warmth and modern minimalism resulted in a visually compelling brand that resonates deeply. With multiple successful pop-up stores, Khet has proven that nostalgia, when executed thoughtfully, creates a lasting emotional connection with the audience.",
//         centerImg: "/case-study/Khet/khet-center.png",
//         top1img:"/case-study/Khet/khet-top1.png",
//         top2img:"/case-study/Khet/khet-top2.png",
//         bottomLeftImg:"/case-study/Khet/khey-bottom-left.png",
//         bottomRightImg:"/case-study/Khet/khet-bottom-right.png",
//         bottomCenter1:"/case-study/Khet/khet-bottom-center1.png",
//         bottomCenter2:"/case-study/Khet/khey-bottom-center2.png",
//         industry: "Retail",
//         serviceProvided: "Brand Identity System",
//         challenge: "Inconsistent brand application across multiple retail locations.",
//         solution: "Comprehensive brand guidelines and implementation strategy.",
//         results: "Customer satisfaction increased by 32% with stronger brand recognition."
//       },
//       {
//         id: 5,
//         videoUrl:"https://youtu.be/iHrmfaBu30U",
//         name: "Riple",
//         logoUrl:"/client logo/logo5.png",
//         description: "Riple, founded by Anupam Ghosh from Cambridge University, is an AI-driven news tech company reshaping how people consume news. Our goal was to create a brand identity as unique as its mission—futuristic, intelligent, and fluid.We designed a distinct gradient palette, inspired by bioluminescence and water’s fluidity, symbolizing adaptability and impact. The result? A bold, modern, and instantly recognizable identity that reflects Riple’s vision—making news smarter, seamless, and engaging for a new generation.",
//         centerImg: "/case-study/riple/riple-center.png",
//         top1img:"/case-study/riple/riple-top1.png",
//         top2img:"/case-study/riple/riple-top2.png",
//         bottomLeftImg:"/case-study/riple/riple-bottom-left.png",
//         bottomRightImg:"/case-study/riple/riple-bottom-right.png",
//         bottomCenter1:"/case-study/riple/riple-bottom-center1.png",
//         bottomCenter2:"/case-study/riple/riple-bottom-center2.png",
//         industry: "Education",
//         serviceProvided: "Brand Research & Refresh",
//         challenge: "Declining enrollment and outdated perception among prospective students.",
//         solution: "Data-driven rebrand based on extensive market research.",
//         results: "52% increase in application submissions following rebrand."
//       },
//       {
//         id: 6,
//         VideoUrl:"https://youtu.be/wx8LR6PrB0E",
//         name: "Acrements",
//         logoUrl:"/client logo/logo6.png",
//         description: "Acrements, founded by Shashank and Prithivik from Bangalore, India, aims to revolutionize property marketing by bridging the gap between builders and homebuyers. Their vision is to create a seamless, high-trust real estate experience powered by technology, premium branding, and high-performance sales strategies.To position Acrements as an exclusive, high-impact brand, we developed a bold, visionary identity that speaks to both builders seeking accelerated sales and homebuyers looking for curated experiences.",
//         centerImg: "/case-study/Acrements/acre-center.png",
//         top1img:"/case-study/Acrements/acre-top1.png",
//         top2img:"/case-study/Acrements/acre-top2.png",
//         bottomLeftImg:"/case-study/Acrements/acre-bottom-left.png",
//         bottomRightImg:"/case-study/Acrements/acre-bottom-right.png",
//         bottomCenter1:"/case-study/Acrements/acre-bottom-center1.png",
//         bottomCenter2:"/case-study/Acrements/acre-bottom-center2.png",
//         industry: "Manufacturing",
//         serviceProvided: "Full Brand Development",
//         challenge: "Traditional manufacturer seeking to modernize image while respecting heritage.",
//         solution: "Evolution-based rebrand that honored history while embracing innovation.",
//         results: "Successfully expanded into two new market segments within first year."
//       },
//       {
//         id: 7,
//         videoUrl:"https://youtu.be/g6IjILH4CM0",
//         name: "Fizmaa",
//         logoUrl:"/client logo/logo7.png",
//         description: "Fizmaa, founded by Tejas Jadhav and Manthan Chajjed, students from Oxford University, is redefining how Indians book events. Designed as a bold, intuitive, and user-friendly platform, Fizmaa simplifies event planning by connecting everyday people with trusted vendors, making the entire process seamless and stress-free.We have built a unique brand identity that feels bold, exciting, and safe for their target audience. The energetic red palette conveys passion and celebration, while the minimal yet powerful design ensures clarity, ease, and confidence. Fizmaa’s friendly yet professional tone makes event planning effortless, creating a space where users feel empowered and vendors can thrive.",
//         centerImg: "/case-study/fizmaa/fiz-center.png",
//         top1img:"/case-study/fizmaa/fiz-top1.png",
//         top2img:"/case-study/fizmaa/fiz-top2.png",
//         bottomLeftImg:"/case-study/fizmaa/fiz-bottom-left.png",
//         bottomRightImg:"/case-study/fizmaa/fiz-bottom-right.png",
//         bottomCenter1:"/case-study/fizmaa/fiz-bottom-center1.png",
//         bottomCenter2:"/case-study/fizmaa/fiz-bottom-center2.png",
//         industry: "Entertainment",
//         serviceProvided: "Digital Brand Experience",
//         challenge: "Disconnected brand experience across digital touchpoints.",
//         solution: "Unified digital brand strategy with consistent user experience.",
//         results: "Engagement metrics improved 30% across all digital platforms."
//       },
//       {
//         id: 8,
//         videoUrl:"https://youtu.be/O86W59ZlLbc",
//         name: "SAM",
//         logoUrl:"/client logo/logo8.png",
//         description: "Founded by Shaan Chawla from Ludhiana, Sukhmiwas Administration & Maintenance was created to redefine premium facility management. We built a bespoke plan that positioned the brand as an exclusive service for upscale property owners. Central to this strategy was a custom Wordmark for “Sam,” designed with refined typography and distinctive elements that reflect the brand's commitment to quality and sophistication. This identity, paired with a curated color palette and comprehensive brand guidelines, ensures every touchpoint exudes exclusivity and premium care.",
//         centerImg: "/case-study/Sam/sam-center.png",
//         top1img:"/case-study/Sam/sam-top1.png",
//         top2img:"/case-study/Sam/sam-top2.png",
//         bottomLeftImg:"/case-study/Sam/sam-bottom-left.png",
//         bottomRightImg:"/case-study/Sam/sam-bottom-right.png",
//         bottomCenter1:"/case-study/Sam/sam-bottom-center1.png",
//         bottomCenter2:"/case-study/Sam/sam-bottom-center2.png",
//         industry: "Food & Beverage",
//         serviceProvided: "Scalable Brand System",
//         challenge: "Fast-growing company with branding that couldn't scale effectively.",
//         solution: "Modular brand system designed for adaptation across markets.",
//         results: "Successfully launched in 5 new international markets with consistent branding."
//       },
//       {
//         id: 9,
//         videoUrl:"https://youtu.be/PoPNoNwcXTI",
//         name: "DigiMark Media",
//         logoUrl:"/client logo/logo9.png",
//         description: "Digital Shahbaz, a Facebook ad expert with over 10,000 Instagram followers, wanted DigiMark Media to feel like a long-established, trustworthy brand in the digital marketing space. He sought a logo that resonated with familiarity while subtly communicating the agency’s expertise in attracting and validating leads.To achieve this, we designed a logo centered around the letter D, shaped like a magnet to symbolize lead generation. The forward arrow represented business growth, while its rotated form as a check mark conveyed credibility and validation. A combination of blue and cyan reinforced trust, stability, and youthful energy, aligning with DigiMark Media’s mission.",
//         centerImg: "/case-study/digimark/digi-center.png",
//         top1img:"/case-study/digimark/digi-top1.png",
//         top2img:"/case-study/digimark/digi-top2.png",
//         bottomLeftImg:"/case-study/digimark/digi-bottom-left.png",
//         bottomRightImg:"/case-study/digimark/digi-bottom-right.png",
//         bottomCenter1:"/case-study/digimark/digi-bottom-center1.png",
//         bottomCenter2:"/case-study/digimark/digi-bottom-center2.png",
//         industry: "Automotive",
//         serviceProvided: "Brand Repositioning",
//         challenge: "Century-old brand perceived as outdated by younger consumers.",
//         solution: "Strategic repositioning that highlighted innovation while respecting heritage.",
//         results: "42% increase in market share among 25-40 age demographic."
//       },
    
// ];

// // Create the context
// const CaseStudyContext = createContext();

// // Custom hook to use the context
// export const useCaseStudyContext = () => useContext(CaseStudyContext);

// // Provider component
// export const CaseStudyProvider = ({ children }) => {
//   const [clients, setClients] = useState(clientsData);
//   const [loading, setLoading] = useState(false);

//   // Function to get a single case study by ID
//   const getCaseStudyById = (id) => {
//     setLoading(true);
//     const study = clients.find(client => client.id === parseInt(id));
//     setLoading(false);
//     return study;
//   };

//   // Function to get related case studies (same industry, excluding current)
//   const getRelatedCaseStudies = (currentId, industry, limit = 3) => {
//     return clients
//       .filter(client => client.id !== currentId && client.industry === industry)
//       .slice(0, limit);
//   };

//   // You could add more functions here to handle data manipulation
//   // For example, adding new case studies, updating existing ones, etc.

//   // Create an object with all the values we want to provide
//   const value = {
//     clients,
//     loading,
//     setLoading,
//     getCaseStudyById,
//     getRelatedCaseStudies
//   };

//   return (
//     <CaseStudyContext.Provider value={value}>
//       {children}
//     </CaseStudyContext.Provider>
//   );
// };

// export default CaseStudyContext;
// src/context/CaseStudyContext.js
import { Video } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

// Initial clients data
const clientsData = [
  {
    id: 1,
    videoUrl:"https://youtu.be/g6IjILH4CM0",
    name: "Fizmaa",
    logoUrl:"/client logo/logo7.png",
    projectImage:"/project-images/Project1.png",
    description: "Fizmaa, founded by Tejas Jadhav and Manthan Chajjed, students from Oxford University, is redefining how Indians book events. Designed as a bold, intuitive, and user-friendly platform, Fizmaa simplifies event planning by connecting everyday people with trusted vendors, making the entire process seamless and stress-free.We have built a unique brand identity that feels bold, exciting, and safe for their target audience. The energetic red palette conveys passion and celebration, while the minimal yet powerful design ensures clarity, ease, and confidence. Fizmaa's friendly yet professional tone makes event planning effortless, creating a space where users feel empowered and vendors can thrive.",
    centerImg: "/case-study/fizmaa/fiz-center.png",
    top1img:"/case-study/fizmaa/fiz-top1.png",
    top2img:"/case-study/fizmaa/fiz-top2.png",
    bottomLeftImg:"/case-study/fizmaa/fiz-bottom-left.png",
    bottomRightImg:"/case-study/fizmaa/fiz-bottom-right.png",
    bottomCenter1:"/case-study/fizmaa/fiz-bottom-center1.png",
    bottomCenter2:"/case-study/fizmaa/fiz-bottom-center2.png",
    industry: "Entertainment",
    serviceProvided: "Digital Brand Experience",
    challenge: "Disconnected brand experience across digital touchpoints.",
    solution: "Unified digital brand strategy with consistent user experience.",
    results: "Engagement metrics improved 30% across all digital platforms."
  }
  ,
  {
    id: 2,
    videoUrl:"https://youtu.be/wx8LR6PrB0E",
    name: "Acrements",
    logoUrl:"/client logo/logo6.png",
    projectImage:"/project-images/Project2.png",
    description: "Acrements, founded by Shashank and Prithivik from Bangalore, India, aims to revolutionize property marketing by bridging the gap between builders and homebuyers. Their vision is to create a seamless, high-trust real estate experience powered by technology, premium branding, and high-performance sales strategies.To position Acrements as an exclusive, high-impact brand, we developed a bold, visionary identity that speaks to both builders seeking accelerated sales and homebuyers looking for curated experiences.",
    centerImg: "/case-study/Acrements/acre-center.png",
    top1img:"/case-study/Acrements/acre-top1.png",
    top2img:"/case-study/Acrements/acre-top2.png",
    bottomLeftImg:"/case-study/Acrements/acre-bottom-left.png",
    bottomRightImg:"/case-study/Acrements/acre-bottom-right.png",
    bottomCenter1:"/case-study/Acrements/acre-bottom-center1.png",
    bottomCenter2:"/case-study/Acrements/acre-bottom-center2.png",
    industry: "Manufacturing",
    serviceProvided: "Full Brand Development",
    challenge: "Traditional manufacturer seeking to modernize image while respecting heritage.",
    solution: "Evolution-based rebrand that honored history while embracing innovation.",
    results: "Successfully expanded into two new market segments within first year."
  },
  {
    id: 3,
    videoUrl:"https://youtu.be/iHrmfaBu30U",
    name: "Riple",
    logoUrl:"/client logo/logo5.png",
    projectImage:"/project-images/Project3.png",
    description: "Riple, founded by Anupam Ghosh from Cambridge University, is an AI-driven news tech company reshaping how people consume news. Our goal was to create a brand identity as unique as its mission—futuristic, intelligent, and fluid.We designed a distinct gradient palette, inspired by bioluminescence and water's fluidity, symbolizing adaptability and impact. The result? A bold, modern, and instantly recognizable identity that reflects Riple's vision—making news smarter, seamless, and engaging for a new generation.",
    centerImg: "/case-study/riple/riple-center.png",
    top1img:"/case-study/riple/riple-top1.png",
    top2img:"/case-study/riple/riple-top2.png",
    bottomLeftImg:"/case-study/riple/riple-bottom-left.png",
    bottomRightImg:"/case-study/riple/riple-bottom-right.png",
    bottomCenter1:"/case-study/riple/riple-bottom-center1.png",
    bottomCenter2:"/case-study/riple/riple-bottom-center2.png",
    industry: "Education",
    serviceProvided: "Brand Research & Refresh",
    challenge: "Declining enrollment and outdated perception among prospective students.",
    solution: "Data-driven rebrand based on extensive market research.",
    results: "52% increase in application submissions following rebrand."
  },
      {
        id: 4,
        name: "Dad's Sparrow",
        videoUrl:"https://youtu.be/nMFkVmgP14M",
        logoUrl:"/client logo/logo2.png",
        projectImage:"/project-images/Project4.png",
        description: "Founded by Yoga Vaishnav from Chennai, Dad's Sparrow was built to redefine filter coffee as a mindful ritual, encouraging people to pause, savor, and connect. Rooted in freedom and authenticity, the brand's identity draws from the sparrow's fleeting movement, symbolizing cherished moments and exploration. We designed a logo mark where minimal bird silhouettes form a coffee flower, reflecting both growth and the organic beauty of coffee culture.Every design choice reinforces Dad's Sparrow as the only filter coffee brand dedicated to crafting a slow, meaningful coffee experience, making every sip a celebration of life's simple joys.",
        centerImg: "/case-study/dad sparrow/ds-center.png",
        top1img:"/case-study/dad sparrow/ds-top1.png",
        top2img:"/case-study/dad sparrow/ds-top2.png",
        bottomLeftImg:"/case-study/dad sparrow/ds-bottom-left.png",
        bottomRightImg:"/case-study/dad sparrow/ds-bottom-right.png",
        bottomCenter1:"/case-study/dad sparrow/ds-bottom-center1.png",
        bottomCenter2:"/case-study/dad sparrow/ds-bottom-center2.png",
        industry: "Finance",
        serviceProvided: "Visual Identity Redesign",
        challenge: "Legacy financial institution struggling to appeal to younger demographic.",
        solution: "Fresh visual identity that maintained trust while introducing modern elements.",
        results: "38% increase in millennial customer acquisition."
      },
      {
        id: 5,
        name: "DigiMark Media",
        videoUrl:"https://youtu.be/PoPNoNwcXTI",
        logoUrl:"/client logo/logo9.png",
        projectImage:"/project-images/Project5.png",
        description: "Digital Shahbaz, a Facebook ad expert with over 10,000 Instagram followers, wanted DigiMark Media to feel like a long-established, trustworthy brand in the digital marketing space. He sought a logo that resonated with familiarity while subtly communicating the agency's expertise in attracting and validating leads.To achieve this, we designed a logo centered around the letter D, shaped like a magnet to symbolize lead generation. The forward arrow represented business growth, while its rotated form as a check mark conveyed credibility and validation. A combination of blue and cyan reinforced trust, stability, and youthful energy, aligning with DigiMark Media's mission.",
        centerImg: "/case-study/digimark/digi-center.png",
        top1img:"/case-study/digimark/digi-top1.png",
        top2img:"/case-study/digimark/digi-top2.png",
        bottomLeftImg:"/case-study/digimark/digi-bottom-left.png",
        bottomRightImg:"/case-study/digimark/digi-bottom-right.png",
        bottomCenter1:"/case-study/digimark/digi-bottom-center1.png",
        bottomCenter2:"/case-study/digimark/digi-bottom-center2.png",
        industry: "Automotive",
        serviceProvided: "Brand Repositioning",
        challenge: "Century-old brand perceived as outdated by younger consumers.",
        solution: "Strategic repositioning that highlighted innovation while respecting heritage.",
        results: "42% increase in market share among 25-40 age demographic."
      },
      {
        id: 6,
        name: "SAM",
        videoUrl:"https://youtu.be/O86W59ZlLbc",
        logoUrl:"/client logo/logo8.jpg",
        projectImage:"/project-images/Project6.png",
        //description: "Founded by Shaan Chawla from Ludhiana, Sukhmiwas Administration & Maintenance was created to redefine premium facility management. We built a bespoke plan that positioned the brand as an exclusive service for upscale property owners. Central to this strategy was a custom Wordmark for "Sam," designed with refined typography and distinctive elements that reflect the brand's commitment to quality and sophistication. This identity, paired with a curated color palette and comprehensive brand guidelines, ensures every touchpoint exudes exclusivity and premium care.",
        description: "Founded by Shaan Chawla from Ludhiana, Sukhmiwas Administration & Maintenance was created to redefine premium facility management. We built a bespoke plan that positioned the brand as an exclusive service for upscale property owners. Central to this strategy was a custom Wordmark for “Sam,” designed with refined typography and distinctive elements that reflect the brand's commitment to quality and sophistication. This identity, paired with a curated color palette and comprehensive brand guidelines, ensures every touchpoint exudes exclusivity and premium care.",
        centerImg: "/case-study/Sam/sam-center.png",
        top1img:"/case-study/Sam/sam-top1.png",
        top2img:"/case-study/Sam/sam-top2.png",
        bottomLeftImg:"/case-study/Sam/sam-bottom-left.png",
        bottomRightImg:"/case-study/Sam/sam-bottom-right.png",
        bottomCenter1:"/case-study/Sam/sam-bottom-center1.png",
        bottomCenter2:"/case-study/Sam/sam-bottom-center2.png",
        industry: "Food & Beverage",
        serviceProvided: "Scalable Brand System",
        challenge: "Fast-growing company with branding that couldn't scale effectively.",
        solution: "Modular brand system designed for adaptation across markets.",
        results: "Successfully launched in 5 new international markets with consistent branding."
      },
    
      {
        id: 7,
        name: "Khet",
        videoUrl:"https://youtu.be/XeEd0c1GOyQ",
        logoUrl:"/client logo/logo4.png",
        projectImage:"/project-images/Project7.png",
        description: "Khet, a unisex perfume brand by Madhav Narang and Arhum Jain, needed a brand identity that balanced nostalgia and modernity while remaining gender-neutral. The challenge was to create a luxurious yet emotionally rich aesthetic that felt timeless.This strategic blend of vintage warmth and modern minimalism resulted in a visually compelling brand that resonates deeply. With multiple successful pop-up stores, Khet has proven that nostalgia, when executed thoughtfully, creates a lasting emotional connection with the audience.",
        centerImg: "/case-study/Khet/khet-center.png",
        top1img:"/case-study/Khet/khet-top1.png",
        top2img:"/case-study/Khet/khet-top2.png",
        bottomLeftImg:"/case-study/Khet/khey-bottom-left.png",
        bottomRightImg:"/case-study/Khet/khet-bottom-right.png",
        bottomCenter1:"/case-study/Khet/khet-bottom-center1.png",
        bottomCenter2:"/case-study/Khet/khey-bottom-center2.png",
        industry: "Retail",
        serviceProvided: "Brand Identity System",
        challenge: "Inconsistent brand application across multiple retail locations.",
        solution: "Comprehensive brand guidelines and implementation strategy.",
        results: "Customer satisfaction increased by 32% with stronger brand recognition."
      },
      {
        id: 8,
        name: "Genki",
        videoUrl:"https://youtu.be/_ZxpRl-4ppc",
        logoUrl:"/client logo/logo1.png",
        projectImage:"/project-images/Project8.png",
        description: "Founded by Harshit Bharti in Gumla, Genki is a fashion brand designed for Gen Z. We strategically named the brand Genki, a Japanese-inspired name, to evoke a sense of exclusivity and foreign quality, positioning it as something beyond the local market. This approach successfully created the perception of Genki as an international brand, resonating with its target audience. To complement this vision, we designed a custom type logo with adaptive lockups, ensuring a dynamic and versatile identity that aligns with the brand's modern appeal.",
        centerImg: "/case-study/genki/genki-center.png",
        top1img:"/case-study/genki/genki-top1.png",
        top2img:"/case-study/genki/genki-top2.png",
        bottomLeftImg:"/case-study/genki/genki-bottom-left.png",
        bottomRightImg:"/case-study/genki/genki-bottom-right.png",
        bottomCenter1:"/case-study/genki/genki-bottom-center1.png",
        bottomCenter2:"/case-study/genki/genki-bottom-center2.png",
        industry: "Technology",
        serviceProvided: "Brand Transformation",
        challenge: "Outdated brand identity that didn't reflect their innovative solutions.",
        solution: "Complete brand overhaul with modern design language and strategic positioning.",
        results: "45% increased brand recognition and 28% boost in qualified leads."
      },
      {
        id: 9,
        name: "Elara",
        videoUrl:"https://youtu.be/pa23xeK9svE",
        logoUrl:"/client logo/logo3.png",
        projectImage:"/project-images/Project9.png",
        description: "Elara, a luxury handloom brand founded by Sainath and Brahmani from Hyderabad, blending heritage, sustainability, and modern sophistication. Developed a comprehensive brand identity, including logo design, typography, tone of voice, and positioning strategy, ensuring alignment with its ethos of understated elegance and cultural authenticity. Crafted a cohesive visual and strategic foundation to establish Elara as a premium brand rooted in Indian craftsmanship while appealing to a global, design-conscious audience.",
        centerImg: "/case-study/elara/elara-center.png",
        top1img:"/case-study/elara/elara-top1.png",
        top2img:"/case-study/elara/elara-top2.png",
        bottomLeftImg:"/case-study/elara/elara-bottom-left.png",
        bottomRightImg:"/case-study/elara/elara-bottom-right.png",
        bottomCenter1:"/case-study/elara/elara-bottom-center1.png",
        bottomCenter2:"/case-study/elara/elara-bottom-center2.png",
        industry: "Healthcare",
        serviceProvided: "Brand Strategy",
        challenge: "New healthcare startup with limited brand recognition in competitive market.",
        solution: "Distinctive positioning strategy focusing on patient-first approach.",
        results: "Secured Series A funding within 8 months of rebrand launch."
      },
    
];

// Create the context
const CaseStudyContext = createContext();

// Custom hook to use the context
export const useCaseStudyContext = () => useContext(CaseStudyContext);

// Provider component
export const CaseStudyProvider = ({ children }) => {
  const [clients, setClients] = useState(clientsData);
  const [loading, setLoading] = useState(false);

  // Function to get a single case study by ID
  const getCaseStudyById = (id) => {
    setLoading(true);
    const study = clients.find(client => client.id === parseInt(id));
    setLoading(false);
    return study;
  };

  // Function to get related case studies (same industry, excluding current)
  const getRelatedCaseStudies = (currentId, industry, limit = 3) => {
    return clients
      .filter(client => client.id !== currentId && client.industry === industry)
      .slice(0, limit);
  };

  // You could add more functions here to handle data manipulation
  // For example, adding new case studies, updating existing ones, etc.

  // Create an object with all the values we want to provide
  const value = {
    clients,
    loading,
    setLoading,
    getCaseStudyById,
    getRelatedCaseStudies
  };

  return (
    <CaseStudyContext.Provider value={value}>
      {children}
    </CaseStudyContext.Provider>
  );
};

export default CaseStudyContext;