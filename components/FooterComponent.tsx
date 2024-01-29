import NewsletterComponent from "./NewsletterComponent";

const FooterComponent = () => {
    return (
        <footer className="w-[96%] mx-auto mt-12 mb-4 md:mb-8 bg-[#F2F9FF] rounded-3xl p-16">
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-5 md:col-span-1">
                    <a href="" title="">
                        <svg width="93" height="57" viewBox="0 0 93 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Logo">
                            <g id="Vector">
                            <path d="M5.25533 22.398C5.74687 21.5797 5.99265 21.1706 6.38865 20.9466C6.78465 20.7227 7.26235 20.7227 8.21774 20.7227H10.7833C11.7387 20.7227 12.2164 20.7227 12.6124 20.9466C13.0084 21.1706 13.2542 21.5797 13.7457 22.398L14.1999 23.1541C14.7463 24.0636 15.0194 24.5183 15.194 25.0146C15.2081 25.0547 15.2217 25.095 15.2348 25.1354C15.3971 25.6358 15.4557 26.1629 15.573 27.217C15.8537 29.7404 15.9941 31.0022 15.3108 31.8428C15.2584 31.9074 15.2028 31.9694 15.1443 32.0286C14.3833 32.7997 13.1123 32.7997 10.5702 32.7997H8.4308C5.88878 32.7997 4.61777 32.7997 3.85669 32.0286C3.79823 31.9694 3.74267 31.9074 3.69019 31.8428C3.00694 31.0022 3.1473 29.7404 3.42802 27.217C3.54528 26.1629 3.60391 25.6358 3.76619 25.1354C3.7793 25.095 3.79291 25.0547 3.80702 25.0146C3.98159 24.5183 4.25475 24.0636 4.80108 23.1541L5.25533 22.398Z" fill="#32C0FF"/>
                            <path d="M5.25533 22.398C5.74687 21.5797 5.99265 21.1706 6.38865 20.9466C6.78465 20.7227 7.26235 20.7227 8.21774 20.7227H10.7833C11.7387 20.7227 12.2164 20.7227 12.6124 20.9466C13.0084 21.1706 13.2542 21.5797 13.7457 22.398L14.1999 23.1541C14.7463 24.0636 15.0194 24.5183 15.194 25.0146C15.2081 25.0547 15.2217 25.095 15.2348 25.1354C15.3971 25.6358 15.4557 26.1629 15.573 27.217C15.8537 29.7404 15.9941 31.0022 15.3108 31.8428C15.2584 31.9074 15.2028 31.9694 15.1443 32.0286C14.3833 32.7997 13.1123 32.7997 10.5702 32.7997H8.4308C5.88878 32.7997 4.61777 32.7997 3.85669 32.0286C3.79823 31.9694 3.74267 31.9074 3.69019 31.8428C3.00694 31.0022 3.1473 29.7404 3.42802 27.217C3.54528 26.1629 3.60391 25.6358 3.76619 25.1354C3.7793 25.095 3.79291 25.0547 3.80702 25.0146C3.98159 24.5183 4.25475 24.0636 4.80108 23.1541L5.25533 22.398Z" fill="url(#paint0_radial_2538_4584)" fillOpacity="0.4"/>
                            <path d="M6.90946 18.1348C6.90946 17.3215 6.90946 16.9148 7.16243 16.6621C7.4154 16.4095 7.82254 16.4095 8.63683 16.4095H10.3642C11.1785 16.4095 11.5856 16.4095 11.8386 16.6621C12.0916 16.9148 12.0916 17.3215 12.0916 18.1348C12.0916 18.9481 12.0916 19.3547 11.8386 19.6074C11.5856 19.8601 11.1785 19.8601 10.3642 19.8601H8.63683C7.82254 19.8601 7.4154 19.8601 7.16243 19.6074C6.90946 19.3547 6.90946 18.9481 6.90946 18.1348Z" fill="#32C0FF"/>
                            <path d="M6.90946 18.1348C6.90946 17.3215 6.90946 16.9148 7.16243 16.6621C7.4154 16.4095 7.82254 16.4095 8.63683 16.4095H10.3642C11.1785 16.4095 11.5856 16.4095 11.8386 16.6621C12.0916 16.9148 12.0916 17.3215 12.0916 18.1348C12.0916 18.9481 12.0916 19.3547 11.8386 19.6074C11.5856 19.8601 11.1785 19.8601 10.3642 19.8601H8.63683C7.82254 19.8601 7.4154 19.8601 7.16243 19.6074C6.90946 19.3547 6.90946 18.9481 6.90946 18.1348Z" fill="url(#paint1_radial_2538_4584)" fillOpacity="0.4"/>
                            <path d="M12.2183 14.6186L13.2312 13.4045C13.403 13.1986 13.489 13.0956 13.593 13.013C13.6141 12.9962 13.6357 12.9802 13.6578 12.9648C13.7667 12.8888 13.8901 12.836 14.1368 12.7304L14.2901 12.6648C14.5802 12.5406 14.7253 12.4785 14.8332 12.3801C14.9391 12.2835 15.0192 12.1621 15.0664 12.0268C15.1145 11.889 15.1145 11.7314 15.1145 11.4161C15.1145 11.1962 15.1145 11.0863 15.0889 10.9837C15.0637 10.8827 15.0205 10.7872 14.9613 10.7016C14.9011 10.6146 14.8185 10.5419 14.6533 10.3966L13.1526 9.0763C12.9106 8.86338 12.7896 8.75692 12.6421 8.7013C12.4946 8.64568 12.3334 8.64568 12.0108 8.64568H3.37827C2.9435 8.64568 2.59105 8.99771 2.59105 9.43195V10.825C2.59105 11.0663 2.75271 11.2776 2.98573 11.3411C4.26596 11.6899 5.38473 12.4728 6.14998 13.5556L7.24864 15.1102C7.44215 15.384 7.75678 15.5468 8.09233 15.5468H10.234C10.827 15.5468 11.1235 15.5468 11.3833 15.4262L11.3897 15.4232C11.6488 15.3011 11.8387 15.0736 12.2183 14.6186Z" fill="#32C0FF"/>
                            <path d="M12.2183 14.6186L13.2312 13.4045C13.403 13.1986 13.489 13.0956 13.593 13.013C13.6141 12.9962 13.6357 12.9802 13.6578 12.9648C13.7667 12.8888 13.8901 12.836 14.1368 12.7304L14.2901 12.6648C14.5802 12.5406 14.7253 12.4785 14.8332 12.3801C14.9391 12.2835 15.0192 12.1621 15.0664 12.0268C15.1145 11.889 15.1145 11.7314 15.1145 11.4161C15.1145 11.1962 15.1145 11.0863 15.0889 10.9837C15.0637 10.8827 15.0205 10.7872 14.9613 10.7016C14.9011 10.6146 14.8185 10.5419 14.6533 10.3966L13.1526 9.0763C12.9106 8.86338 12.7896 8.75692 12.6421 8.7013C12.4946 8.64568 12.3334 8.64568 12.0108 8.64568H3.37827C2.9435 8.64568 2.59105 8.99771 2.59105 9.43195V10.825C2.59105 11.0663 2.75271 11.2776 2.98573 11.3411C4.26596 11.6899 5.38473 12.4728 6.14998 13.5556L7.24864 15.1102C7.44215 15.384 7.75678 15.5468 8.09233 15.5468H10.234C10.827 15.5468 11.1235 15.5468 11.3833 15.4262L11.3897 15.4232C11.6488 15.3011 11.8387 15.0736 12.2183 14.6186Z" fill="url(#paint2_radial_2538_4584)" fillOpacity="0.4"/>
                            <path d="M1.72737 10.8023V9.077C1.72737 8.67035 1.72737 8.46702 1.60088 8.34069C1.4744 8.21436 1.27083 8.21436 0.863683 8.21436C0.456539 8.21436 0.252967 8.21436 0.126483 8.34069C0 8.46702 0 8.67035 0 9.077V10.8023C0 11.2089 0 11.4123 0.126484 11.5386C0.252967 11.6649 0.456539 11.6649 0.863683 11.6649C1.27083 11.6649 1.4744 11.6649 1.60088 11.5386C1.72737 11.4123 1.72737 11.2089 1.72737 10.8023Z" fill="#32C0FF"/>
                            <path d="M1.72737 10.8023V9.077C1.72737 8.67035 1.72737 8.46702 1.60088 8.34069C1.4744 8.21436 1.27083 8.21436 0.863683 8.21436C0.456539 8.21436 0.252967 8.21436 0.126483 8.34069C0 8.46702 0 8.67035 0 9.077V10.8023C0 11.2089 0 11.4123 0.126484 11.5386C0.252967 11.6649 0.456539 11.6649 0.863683 11.6649C1.27083 11.6649 1.4744 11.6649 1.60088 11.5386C1.72737 11.4123 1.72737 11.2089 1.72737 10.8023Z" fill="url(#paint3_radial_2538_4584)" fillOpacity="0.4"/>
                            <path d="M4.10766 12.7738C3.87127 12.6217 3.55253 12.728 3.5304 13.008L3.50458 13.3347C3.40218 14.6301 2.87902 15.8568 2.01464 16.828C1.80035 17.0688 1.83356 17.4402 2.0872 17.6392L2.65208 18.0825C2.93892 18.3076 3.33678 18.3274 3.64454 18.1318L4.66318 17.4843C5.21714 17.1322 5.67956 16.6539 6.01248 16.0886C6.07675 15.9795 6.13581 15.8678 6.18957 15.7538C6.30817 15.5024 6.26161 15.2095 6.10116 14.9824L5.44438 14.0531C5.08253 13.5411 4.62757 13.1081 4.10766 12.7738Z" fill="#32C0FF"/>
                            <path d="M4.10766 12.7738C3.87127 12.6217 3.55253 12.728 3.5304 13.008L3.50458 13.3347C3.40218 14.6301 2.87902 15.8568 2.01464 16.828C1.80035 17.0688 1.83356 17.4402 2.0872 17.6392L2.65208 18.0825C2.93892 18.3076 3.33678 18.3274 3.64454 18.1318L4.66318 17.4843C5.21714 17.1322 5.67956 16.6539 6.01248 16.0886C6.07675 15.9795 6.13581 15.8678 6.18957 15.7538C6.30817 15.5024 6.26161 15.2095 6.10116 14.9824L5.44438 14.0531C5.08253 13.5411 4.62757 13.1081 4.10766 12.7738Z" fill="url(#paint4_radial_2538_4584)" fillOpacity="0.4"/>
                            </g>
                            <g id="I JU&#197;&#187;">
                            <path d="M40.9505 32.5986C37.7973 32.5986 35.3003 31.046 34.3559 28.5331C34.1479 27.9568 34.0198 27.4927 34.0198 26.8524C34.0198 25.764 34.6761 25.0918 35.7005 25.0918C36.6128 25.0918 37.157 25.5559 37.4451 26.6123C37.9413 28.405 39.1738 29.3974 40.9184 29.3974C43.2713 29.3974 44.5518 27.9729 44.5518 25.3479V10.7183C44.5518 9.56584 45.2241 8.86157 46.3445 8.86157C47.4489 8.86157 48.1372 9.56584 48.1372 10.7183V25.3639C48.1372 29.9416 45.4482 32.5986 40.9505 32.5986Z" fill="#26282D"/>
                            <path d="M61.7904 32.5986C55.9962 32.5986 52.4428 29.0773 52.4428 24.0994V10.7183C52.4428 9.56584 53.1151 8.86157 54.2355 8.86157C55.3399 8.86157 56.0282 9.56584 56.0282 10.7183V23.7953C56.0282 27.0925 58.109 29.4134 61.7904 29.4134C65.4718 29.4134 67.5686 27.0925 67.5686 23.7953V10.7183C67.5686 9.56584 68.2409 8.86157 69.3613 8.86157C70.4657 8.86157 71.138 9.56584 71.138 10.7183V24.0994C71.138 29.0773 67.5846 32.5986 61.7904 32.5986Z" fill="#26282D"/>
                            <path d="M76.6281 32.2145C75.5236 32.2145 74.7873 31.5262 74.7873 30.4858C74.7873 29.9576 74.9474 29.5415 75.3636 28.9652L87.4322 12.3349V12.2229H76.58C75.5877 12.2229 74.9154 11.6146 74.9154 10.6703C74.9154 9.7259 75.5877 9.11767 76.58 9.11767H89.9451C91.0976 9.11767 91.8338 9.82194 91.8338 10.8943C91.8338 11.4386 91.6578 11.7907 91.2416 12.3829L79.237 28.9972V29.1093H90.7134C91.7218 29.1093 92.3941 29.7175 92.3941 30.6619C92.3941 31.6062 91.7058 32.2145 90.7134 32.2145H76.6281Z" fill="#26282D"/>
                            </g>
                            <g id="CZYSTO">
                            <path d="M8.04307 56.7998C2.97605 56.7998 0 53.7185 0 48.3063C0 42.8942 3.04243 39.8242 7.86606 39.8242C10.9195 39.8242 13.1765 41.0181 14.4377 43.3035C14.7585 43.872 14.9245 44.4746 14.9245 45.0545C14.9245 46.2825 14.1169 47.0784 12.8888 47.0784C11.871 47.0784 11.2514 46.669 10.7425 45.6571C10.0345 44.2586 9.14941 43.6105 7.92137 43.6105C5.99635 43.6105 4.77938 45.3615 4.77938 48.295C4.77938 51.2626 5.98528 53.0136 7.93244 53.0136C9.21579 53.0136 10.1119 52.3427 10.7868 50.8874C11.2625 49.8527 11.8267 49.4547 12.8114 49.4547C14.1501 49.4547 15.0241 50.2961 15.0241 51.5809C15.0241 51.9903 14.9356 52.4223 14.7696 52.843C13.8403 55.2194 11.1519 56.7998 8.04307 56.7998Z" fill="#32C0FF"/>
                            <path d="M19.2392 56.5156C17.8342 56.5156 16.9159 55.6856 16.9159 54.4007C16.9159 53.7526 17.104 53.241 17.5354 52.6611L24.0296 44.0425V43.9516H18.8299C17.5908 43.9516 16.761 43.258 16.761 42.03C16.761 40.8021 17.5686 40.1085 18.8299 40.1085H27.1716C28.5988 40.1085 29.495 40.9612 29.495 42.337C29.495 43.0761 29.152 43.5764 28.8311 44.0084L22.4033 52.5815V52.6725H27.9129C29.1741 52.6725 29.9817 53.366 29.9817 54.594C29.9817 55.822 29.152 56.5156 27.9129 56.5156H19.2392Z" fill="#32C0FF"/>
                            <path d="M38.7882 56.7998C37.2946 56.7998 36.4427 55.8902 36.4427 54.2757V51.3194L31.8625 43.8038C31.5417 43.2694 31.3757 42.7009 31.3757 42.1437C31.3757 40.8021 32.3825 39.8242 33.7654 39.8242C34.7943 39.8242 35.3475 40.2222 35.9781 41.416L38.7992 46.76H38.8878L41.72 41.4047C42.3174 40.279 42.9369 39.8242 43.8773 39.8242C45.216 39.8242 46.2006 40.7907 46.2006 42.0982C46.2006 42.6781 46.0347 43.2353 45.7028 43.781L41.1336 51.3194V54.2757C41.1336 55.8902 40.2817 56.7998 38.7882 56.7998Z" fill="#32C0FF"/>
                            <path d="M53.5799 56.7998C49.9843 56.7998 47.9044 55.4695 47.2185 53.8663C47.0525 53.4911 46.9751 53.1045 46.9751 52.7293C46.9751 51.5696 47.827 50.7737 48.9886 50.7737C49.8737 50.7737 50.4711 51.0579 51.1017 51.9675C51.6549 52.7748 52.5842 53.1045 53.6352 53.1045C55.0403 53.1045 55.9032 52.5133 55.9032 51.706C55.9032 50.9328 55.2837 50.6031 53.4914 50.2734L51.8872 49.9777C48.712 49.3979 46.9751 47.7492 46.9751 45.2023C46.9751 41.905 49.7409 39.8242 53.5357 39.8242C56.6998 39.8242 58.9678 40.9726 59.7975 43.0192C59.9303 43.349 59.9967 43.656 59.9967 44.0312C59.9967 45.1227 59.2222 45.8618 58.0495 45.8731C57.0538 45.8731 56.4232 45.5207 55.859 44.6452C55.339 43.8265 54.5977 43.5195 53.591 43.5195C52.2855 43.5195 51.6217 44.1108 51.6217 44.8498C51.6217 45.5889 52.3076 45.9413 53.9007 46.237L55.5049 46.5326C58.9346 47.1693 60.5498 48.6133 60.5498 51.2739C60.5498 54.6509 57.9831 56.7998 53.5799 56.7998Z" fill="#32C0FF"/>
                            <path d="M68.2389 56.7998C66.7453 56.7998 65.8934 55.8902 65.8934 54.2757V43.9516H63.5369C62.2979 43.9516 61.4681 43.258 61.4681 42.03C61.4681 40.8021 62.2757 40.1085 63.5369 40.1085H72.9408C74.202 40.1085 75.0097 40.8021 75.0097 42.03C75.0097 43.258 74.1799 43.9516 72.9408 43.9516H70.5843V54.2757C70.5843 55.8902 69.7324 56.7998 68.2389 56.7998Z" fill="#32C0FF"/>
                            <path d="M83.274 56.7998C78.3287 56.7998 75.2309 53.5593 75.2309 48.3177C75.2309 43.0761 78.3397 39.8242 83.274 39.8242C88.2083 39.8242 91.3171 43.0761 91.3171 48.3177C91.3171 53.5593 88.2083 56.7998 83.274 56.7998ZM83.274 52.9567C85.2433 52.9567 86.5377 51.1489 86.5377 48.3177C86.5377 45.4752 85.2322 43.6673 83.274 43.6673C81.3158 43.6673 80.0103 45.4752 80.0103 48.3177C80.0103 51.1489 81.3047 52.9567 83.274 52.9567Z" fill="#32C0FF"/>
                            </g>
                            <path id="I JU&#197;&#187;_2" d="M25.109 32.4706C23.9886 32.4706 23.3163 31.7663 23.3163 30.6139V10.7183C23.3163 9.56584 23.9886 8.86157 25.109 8.86157C26.2134 8.86157 26.9017 9.56584 26.9017 10.7183V30.6139C26.9017 31.7663 26.2134 32.4706 25.109 32.4706Z" fill="#26282D"/>
                            <g id="Star 2">
                            <path d="M82.1214 1.15512C82.6213 0.0373352 84.208 0.037335 84.7079 1.15512L84.7312 1.2073C84.8735 1.52542 85.128 1.77995 85.4461 1.92222L85.4983 1.94555C86.6161 2.44541 86.6161 4.03218 85.4983 4.53204L85.4461 4.55537C85.128 4.69763 84.8735 4.95216 84.7312 5.27029L84.7079 5.32246C84.208 6.44025 82.6213 6.44025 82.1214 5.32246L82.0981 5.27029C81.9558 4.95216 81.7013 4.69763 81.3831 4.55537L81.331 4.53204C80.2132 4.03218 80.2132 2.44541 81.331 1.94555L81.3831 1.92222C81.7013 1.77995 81.9558 1.52542 82.0981 1.2073L82.1214 1.15512Z" fill="#32C0FF"/>
                            <path d="M82.1214 1.15512C82.6213 0.0373352 84.208 0.037335 84.7079 1.15512L84.7312 1.2073C84.8735 1.52542 85.128 1.77995 85.4461 1.92222L85.4983 1.94555C86.6161 2.44541 86.6161 4.03218 85.4983 4.53204L85.4461 4.55537C85.128 4.69763 84.8735 4.95216 84.7312 5.27029L84.7079 5.32246C84.208 6.44025 82.6213 6.44025 82.1214 5.32246L82.0981 5.27029C81.9558 4.95216 81.7013 4.69763 81.3831 4.55537L81.331 4.53204C80.2132 4.03218 80.2132 2.44541 81.331 1.94555L81.3831 1.92222C81.7013 1.77995 81.9558 1.52542 82.0981 1.2073L82.1214 1.15512Z" fill="url(#paint5_radial_2538_4584)" fillOpacity="0.32"/>
                            </g>
                            </g>
                            <defs>
                            <radialGradient id="paint0_radial_2538_4584" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.90244 20.507) rotate(38.5619) scale(22.678 24.8106)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint1_radial_2538_4584" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.90244 20.507) rotate(38.5619) scale(22.678 24.8106)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint2_radial_2538_4584" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.90244 20.507) rotate(38.5619) scale(22.678 24.8106)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint3_radial_2538_4584" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.90244 20.507) rotate(38.5619) scale(22.678 24.8106)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint4_radial_2538_4584" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.90244 20.507) rotate(38.5619) scale(22.678 24.8106)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint5_radial_2538_4584" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(83.4146 3.23879) rotate(27.1345) scale(12.5459 11.4295)">
                            <stop stopColor="white"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </radialGradient>
                            </defs>
                        </svg>
                    </a>
                    
                    <p className="font-semibold text-[#15526D] my-10">ijuzczysto.pl © 2023</p>

                    <div>
                        <ul className="flex flex-row items-center gap-6">
                            <li>
                                <a href="" title="">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Social / Facebook">
                                            <path d="M0 12.7998C0 6.17239 5.37258 0.799805 12 0.799805C18.6274 0.799805 24 6.17239 24 12.7998C24 19.4272 18.6274 24.7998 12 24.7998C5.37258 24.7998 0 19.4272 0 12.7998Z" fill="#0866FF"/>
                                            <path id="Vector" d="M11.9999 6.7998C8.68627 6.7998 6 9.49599 6 12.8218C6 15.6459 7.93724 18.0157 10.5505 18.6666V14.6622H9.31337V12.8218H10.5505V12.0289C10.5505 9.9792 11.4748 9.02916 13.4797 9.02916C13.8598 9.02916 14.5157 9.10408 14.7841 9.17875V10.8469C14.6425 10.8319 14.3965 10.8245 14.091 10.8245C13.1072 10.8245 12.7271 11.1985 12.7271 12.171V12.8218H14.6869L14.3502 14.6622H12.7271V18.7998C15.698 18.4397 18 15.9008 18 12.8218C17.9998 9.49599 15.3135 6.7998 11.9999 6.7998Z" fill="white"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="" title="">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Social / Instagram">
                                        <path d="M0 12.7998C0 6.17239 5.37258 0.799805 12 0.799805C18.6274 0.799805 24 6.17239 24 12.7998C24 19.4272 18.6274 24.7998 12 24.7998C5.37258 24.7998 0 19.4272 0 12.7998Z" fill="url(#paint0_radial_2538_4620)"/>
                                        <path d="M0 12.7998C0 6.17239 5.37258 0.799805 12 0.799805C18.6274 0.799805 24 6.17239 24 12.7998C24 19.4272 18.6274 24.7998 12 24.7998C5.37258 24.7998 0 19.4272 0 12.7998Z" fill="url(#paint1_radial_2538_4620)"/>
                                        <g id="Vector">
                                        <path d="M12.0035 7.88048C13.6076 7.88048 13.7975 7.88752 14.4284 7.91565C15.0147 7.94143 15.3312 8.03989 15.5423 8.12194C15.8214 8.22977 16.0231 8.36105 16.2318 8.56968C16.4428 8.78066 16.5718 8.97992 16.6797 9.25888C16.7618 9.46986 16.8603 9.78867 16.8861 10.3724C16.9142 11.0053 16.9212 11.1952 16.9212 12.7963C16.9212 14.3997 16.9142 14.5896 16.8861 15.2202C16.8603 15.8063 16.7618 16.1227 16.6797 16.3337C16.5718 16.6127 16.4405 16.8143 16.2318 17.0229C16.0207 17.2339 15.8214 17.3628 15.5423 17.4706C15.3312 17.5527 15.0123 17.6511 14.4284 17.6769C13.7952 17.7051 13.6052 17.7121 12.0035 17.7121C10.3995 17.7121 10.2095 17.7051 9.57866 17.6769C8.99238 17.6511 8.67579 17.5527 8.46473 17.4706C8.18566 17.3628 7.98398 17.2315 7.77526 17.0229C7.5642 16.8119 7.43522 16.6127 7.32734 16.3337C7.24526 16.1227 7.14677 15.8039 7.12097 15.2202C7.09283 14.5873 7.08579 14.3974 7.08579 12.7963C7.08579 11.1929 7.09283 11.003 7.12097 10.3724C7.14677 9.78633 7.24526 9.46986 7.32734 9.25888C7.43522 8.97992 7.56654 8.77832 7.77526 8.56968C7.98632 8.3587 8.18566 8.22977 8.46473 8.12194C8.67579 8.03989 8.99472 7.94143 9.57866 7.91565C10.2095 7.88752 10.3995 7.88048 12.0035 7.88048ZM12.0035 6.7998C10.3737 6.7998 10.1696 6.80684 9.52941 6.83497C8.89154 6.8631 8.453 6.96624 8.07309 7.11393C7.67676 7.26865 7.34141 7.47259 7.0084 7.80781C6.67305 8.14069 6.46902 8.47591 6.31425 8.86974C6.1665 9.25185 6.06332 9.68787 6.03518 10.3255C6.00704 10.9678 6 11.1718 6 12.801C6 14.4302 6.00704 14.6341 6.03518 15.2741C6.06332 15.9117 6.1665 16.3501 6.31425 16.7299C6.46902 17.126 6.67305 17.4613 7.0084 17.7941C7.34141 18.127 7.67676 18.3333 8.07074 18.4857C8.453 18.6334 8.88919 18.7365 9.52707 18.7646C10.1673 18.7928 10.3713 18.7998 12.0012 18.7998C13.631 18.7998 13.8351 18.7928 14.4753 18.7646C15.1132 18.7365 15.5517 18.6334 15.9316 18.4857C16.3256 18.3333 16.6609 18.127 16.9939 17.7941C17.3269 17.4613 17.5333 17.126 17.6858 16.7322C17.8335 16.3501 17.9367 15.9141 17.9648 15.2765C17.993 14.6365 18 14.4325 18 12.8033C18 11.1741 17.993 10.9702 17.9648 10.3302C17.9367 9.69256 17.8335 9.25419 17.6858 8.87443C17.538 8.47591 17.334 8.14069 16.9986 7.80781C16.6656 7.47494 16.3303 7.26865 15.9363 7.11627C15.554 6.96859 15.1178 6.86544 14.48 6.83731C13.8374 6.80684 13.6334 6.7998 12.0035 6.7998Z" fill="white"/>
                                        <path d="M12.0035 9.71834C10.301 9.71834 8.91968 11.0991 8.91968 12.801C8.91968 14.5029 10.301 15.8836 12.0035 15.8836C13.7061 15.8836 15.0874 14.5029 15.0874 12.801C15.0874 11.0991 13.7061 9.71834 12.0035 9.71834ZM12.0035 14.8006C10.899 14.8006 10.0031 13.9051 10.0031 12.801C10.0031 11.6969 10.899 10.8014 12.0035 10.8014C13.1081 10.8014 14.0039 11.6969 14.0039 12.801C14.0039 13.9051 13.1081 14.8006 12.0035 14.8006Z" fill="white"/>
                                        <path d="M15.9293 9.59645C15.9293 9.99497 15.6056 10.3161 15.2093 10.3161C14.8106 10.3161 14.4893 9.99262 14.4893 9.59645C14.4893 9.19794 14.813 8.87678 15.2093 8.87678C15.6056 8.87678 15.9293 9.20028 15.9293 9.59645Z" fill="white"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <radialGradient id="paint0_radial_2538_4620" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.37503 26.6483) rotate(-90) scale(23.7858 22.1226)">
                                        <stop stopColor="#FFDD55"/>
                                        <stop offset="0.1" stopColor="#FFDD55"/>
                                        <stop offset="0.5" stopColor="#FF543E"/>
                                        <stop offset="1" stopColor="#C837AB"/>
                                        </radialGradient>
                                        <radialGradient id="paint1_radial_2538_4620" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-4.02013 2.52872) rotate(78.6806) scale(10.6323 43.827)">
                                        <stop stopColor="#3771C8"/>
                                        <stop offset="0.128" stopColor="#3771C8"/>
                                        <stop offset="1" stopColor="#6600FF" stopOpacity="0"/>
                                        </radialGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-5 md:col-span-2 xl:col-span-1">
                    <h5 className="font-bold text-[#15526D]">Kategorie</h5>

                    <ul className="font-medium flex flex-col gap-3 mt-6">
                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Pranie</a>
                        </li>

                        <li>
                             <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Zmywanie</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Sprzątanie</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Odkamieniacze</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Odświeżacze</a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-5 md:col-span-2 xl:col-span-1">
                    <h5 className="font-bold text-[#15526D]">Sklep</h5>

                    <ul className="font-medium flex flex-col gap-3 mt-6">
                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Blog</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Dostawy</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Regulamin</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Polityka prywatności</a>
                        </li>

                        <li>
                            <a className="text-[#15526D] hover:text-[#30B7F3]" href="">Zwroty</a>
                        </li>
                    </ul>
                </div>

                <NewsletterComponent />
            </div>
        </footer>
    )
}

export default FooterComponent;