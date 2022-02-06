import React from "react";
import { Link } from "gatsby";
import * as c from './navbar.module.scss'
const Navbar = () => {
  return (
    <nav className={`z100 ${c.nav__wrapper}`}>
      <div className={`${c.nav}`}>

        <div className="grid">

          <p className={'col2'}>  
            <Link to="/" type="home" element="title">
              work
            </Link>
          </p>
          
          <p className={'col4'}>  
            <Link type="about" element="title">
              about
            </Link>
          </p>

          <p className={''}>  
            <Link type="contact" element="title">
              contact
            </Link>
          </p>

          <div className={` col2__r span2 ${c.logo} show__d`}>
          <svg viewBox="0 0 138 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="m79.366 29.411 4.8779-1.3665-0.1416-0.5056-0.1417-0.5057-3.8326 1.0737-3.8327 1.0737-0.1416-0.5056 0.6968-0.1952-0.0708-0.2528-0.0709-0.2529 0.3485-0.0976 0.3484-0.0976-0.1417-0.5056-0.1416-0.5056 0.3484-0.0976 0.3484-0.0977-0.1416-0.5056 0.6968-0.1952-0.1416-0.5056 0.6968-0.1952-0.1416-0.5057-0.1417-0.5056 0.3485-0.0976 0.3484-0.0976-0.0708-0.2528-0.0709-0.2529 0.3485-0.0976 0.3484-0.0976-0.0708-0.2528-0.0709-0.2528 0.3485-0.0976 0.3484-0.0976-0.0708-0.2528-0.0709-0.2528 0.3485-0.0977 0.3484-0.0976-0.1417-0.5056-0.1416-0.5056 0.6968-0.1952-0.0708-0.2529-0.0708-0.2528 0.6968-0.1952-0.1416-0.5056-0.1417-0.5056-9.059 2.5378 0.1417 0.5056 0.1416 0.5056 6.2717-1.7569 0.1416 0.5056-0.6968 0.1952 0.1416 0.5057 0.1416 0.5056-0.6968 0.1952 0.0708 0.2528 0.0709 0.2528-0.3485 0.0976-0.3484 0.0976 0.0708 0.2529 0.0708 0.2528-0.6968 0.1952 0.1417 0.5056 0.1416 0.5057-0.6968 0.1952 0.1416 0.5056-0.6968 0.1952 0.1416 0.5056-0.3484 0.0977-0.3484 0.0976 0.1416 0.5056 0.1417 0.5056-0.3485 0.0976-0.3484 0.0976 0.0708 0.2529 0.0709 0.2528-0.3485 0.0976-0.3484 0.0976 0.0708 0.2528 0.0709 0.2528-0.3485 0.0976-0.3484 0.0976 0.2125 0.7585 0.2125 0.7584 4.8779-1.3665zm8.0137-2.245 1.0453-0.2928-0.9915-3.5394-0.9916-3.5394 0.3484-0.0976 0.3485-0.0976-0.0709-0.2529-0.0708-0.2528 0.3484-0.0976 0.3485-0.0976-0.0709-0.2528-0.0708-0.2528 1.3937-0.3904-0.0708-0.2529-0.0708-0.2528 1.0452-0.2928 1.0453-0.2928 0.0708 0.2528 0.0709 0.2528 1.3936-0.3904 0.1417 0.5056 0.1416 0.5056 0.3485-0.0976 0.3484-0.0976 0.9915 3.5394 0.9916 3.5394 0.6968-0.1952 0.6969-0.1952-1.1332-4.045-1.1332-4.0451-0.3484 0.0976-0.3485 0.0976-0.1416-0.5056-0.3484 0.0976-0.3485 0.0976-0.1416-0.5056-0.6968 0.1952-0.0709-0.2528-0.0708-0.2528-4.1811 1.1713 0.0708 0.2528 0.0709 0.2528-1.3937 0.3904 0.0708 0.2529 0.0708 0.2528-0.6968 0.1952-0.5932-2.1173-0.5931-2.1174-1.0453 0.2929-1.0453 0.2928 3.5944 12.83 1.0452-0.2929zm11.422-4.8355 0.3484-0.0976 0.1417 0.5056 0.1416 0.5056 0.6972-0.1952 0.696-0.1952 0.142 0.5056 4.878-1.3665-0.142-0.5056 0.697-0.1952 0.697-0.1953-0.142-0.5056 0.349-0.0976 0.348-0.0976 0.142 0.5056 0.348-0.0976 0.349-0.0976 0.071 0.2528 0.07 0.2528 1.046-0.2928 1.045-0.2928-0.142-0.5056-0.141-0.5057-0.697 0.1952-0.697 0.1953-0.992-3.5395-0.991-3.5394-0.348 0.0976-0.349 0.0976-0.142-0.5056-0.696 0.1952-0.142-0.5056-0.348 0.0976-0.349 0.0976-0.142-0.5056-2.439 0.6832-2.4385 0.6833 0.0708 0.2528 0.0709 0.2528-0.6969 0.1952-0.6968 0.1953 0.1416 0.5056-0.6968 0.1952 0.1416 0.5056 0.1417 0.5057-0.3484 0.0976-0.3485 0.0976 0.1417 0.5056 0.1416 0.5056 2.0906-0.5856-0.2125-0.7584-0.2125-0.7585 0.6964-0.1952 0.697-0.1952-0.071-0.2528-0.07-0.2529 3.484-0.976 0.142 0.5056 0.696-0.1952 0.142 0.5056 0.348-0.0976 0.349-0.0976 0.142 0.5056 0.141 0.5057-0.348 0.0976-0.349 0.0976 0.142 0.5056-0.348 0.0976-0.349 0.0976 0.142 0.5056-1.742 0.4881-1.742 0.488 0.07 0.2528 0.071 0.2529-1.045 0.2928-1.0453 0.2928 0.1416 0.5056-0.3484 0.0976-0.3484 0.0977 0.1416 0.5056-0.6968 0.1952 0.1416 0.5056-0.6968 0.1952 0.5666 2.0226 0.3484-0.0976zm1.5239-2.6082 0.348-0.0976-0.07-0.2528-0.071-0.2528 1.045-0.2929 1.045-0.2928-0.07-0.2528-0.071-0.2528 1.393-0.3905 1.394-0.3904-0.142-0.5056 0.697-0.1952 0.697-0.1953 0.708 2.5282-0.696 0.1952 0.07 0.2528 0.071 0.2528-0.348 0.0977-0.349 0.0976 0.142 0.5056-0.348 0.0976-0.349 0.0976 0.142 0.5056-2.091 0.5857-2.09 0.5856-0.142-0.5056-0.348 0.0976-0.349 0.0976-0.283-1.0112-0.2834-1.0113 0.3484-0.0976zm12.838 0.2207 1.045-0.2928-0.991-3.5394-0.992-3.5394 0.349-0.0976 0.348-0.0976-0.071-0.2529-0.071-0.2528 0.349-0.0976 0.348-0.0976-0.071-0.2528-0.07-0.2528 0.696-0.1952 0.697-0.1952-0.071-0.2529-0.07-0.2528 2.09-0.58562 0.142 0.50562 0.697-0.19521 0.696-0.19522 0.142 0.50563 0.142 0.5056 0.348-0.0976 0.349-0.0976 0.991 3.5394 0.992 3.5394 0.697-0.1952 0.696-0.1952-1.133-4.045-1.133-4.0451-0.348 0.0976-0.349 0.09761-0.071-0.25281-0.07-0.25282-0.349 0.09761-0.348 0.09761-0.071-0.25282-0.071-0.25281-0.348 0.0976-0.349 0.09761-0.071-0.25281-0.07-0.25282-4.182 1.1713 0.071 0.25281 0.071 0.25282-1.394 0.39039 0.071 0.2529 0.071 0.2528-0.348 0.0976-0.349 0.0976-0.071-0.2528-0.07-0.2528-1.046 0.2928-1.045 0.2928 2.55 9.1014 1.045-0.2929zm10.855-6.8581 0.348-0.0976 0.142 0.5057 0.142 0.5056 0.696-0.1952 0.284 1.0112 0.348-0.0976 0.349-0.0976 0.07 0.2528 0.071 0.2529 0.697-0.1953 0.697-0.1952 0.071 0.2528 0.071 0.2529 2.09-0.5857 2.091-0.5856-0.071-0.2529-0.071-0.2528 1.394-0.3904-0.142-0.5056 0.348-0.0976 0.349-0.0977-0.142-0.5056 0.349-0.0976 0.348-0.0976 0.283 1.0113 0.284 1.0112-0.349 0.0976-0.348 0.0976 0.212 0.7585 0.213 0.7584-0.697 0.1952-0.697 0.1953 0.142 0.5056-2.439 0.6833-2.439 0.6832-0.142-0.5056-0.348 0.0976-0.349 0.0976-0.071-0.2528-0.07-0.2528-0.349 0.0976-0.348 0.0976-0.071-0.2528-0.071-0.2529-0.697 0.1953-0.697 0.1952 0.284 1.0112 0.348-0.0976 0.349-0.0976 0.141 0.5057 0.142 0.5056 1.394-0.3904 0.07 0.2528 0.071 0.2528 1.394-0.3904 1.394-0.3905 0.07 0.2528 0.071 0.2528 0.349-0.0976 0.348-0.0976-0.142-0.5056 1.394-0.3904 1.394-0.3905-0.142-0.5056 1.394-0.3904-0.071-0.2528-0.071-0.2529 0.349-0.0976 0.348-0.0976-0.142-0.5056-0.141-0.5056 0.152-0.0427 0.153-0.0427-1.417-5.0564-1.416-5.0563-1.002 0.28063 0.142 0.50563 0.141 0.50563-0.348 0.0976-0.349 0.09761-0.07-0.25281-0.071-0.25282-0.349 0.09761-0.348 0.09761-0.071-0.25282-0.071-0.25281-0.697 0.19521-0.696 0.19522-0.071-0.25282-0.071-0.25281-3.484 0.97608 0.071 0.25281 0.07 0.25282-0.696 0.19522-0.697 0.19521 0.07 0.25282 0.071 0.25281-0.697 0.19522-0.696 0.19521 0.141 0.50563 0.142 0.50563-0.348 0.09761-0.349 0.09761 0.142 0.50563 0.141 0.50563-0.348 0.09765-0.348 0.0976 0.424 1.5169 0.425 1.5169 0.349-0.0977zm1.099-4.125 0.348-0.09761-0.071-0.25281-0.07-0.25282 0.696-0.19521-0.07-0.25282-0.071-0.25281 1.394-0.39044-0.142-0.50562 1.394-0.39044 1.393-0.39043 0.071 0.25281 0.071 0.25282 0.348-0.09761 0.349-0.09761 0.071 0.25282 0.07 0.25281 0.349-0.0976 0.348-0.09761 0.071 0.25281 0.071 0.25282 0.348-0.09761 0.349-0.09761 0.212 0.75845 0.213 0.75844 0.348-0.0976 0.349-0.09761 0.141 0.50563 0.142 0.50563-0.349 0.09761-0.348 0.0976 0.212 0.75844 0.213 0.7585-0.349 0.0976-0.348 0.0976 0.142 0.5056 0.141 0.5056-0.696 0.1952-0.697 0.1953 0.071 0.2528 0.07 0.2528-1.742 0.488-1.742 0.4881-0.071-0.2528-0.071-0.2529-0.348 0.0977-0.348 0.0976-0.071-0.2529-0.071-0.2528-0.348 0.0976-0.349 0.0976-0.142-0.5056-0.696 0.1952-0.567-2.0225-0.567-2.0225 0.349-0.09761z" clip-rule="evenodd"  fill-rule="evenodd"/>
            <path d="m0.72727 20.44h-0.36364-0.36364l2.9136e-7 -1.56h0.72727 0.72728v0.52 0.52h0.36363 0.36364v0.26 0.26h0.36363 0.36364v0.26 0.26h2.5455 2.5454v-0.26-0.26h0.36364 0.36363v-1.04-1.04h-0.36363-0.36364v-0.26-0.26h-1.0909-1.0909v-0.26-0.26h-1.4545-1.4546v-0.26-0.26h-0.72727-0.72727v-0.26-0.26h-0.36364-0.36364v-0.26-0.26h-0.36364-0.36364l3.8848e-7 -2.08h0.36364 0.36364v-0.26-0.26h0.36364 0.36364v-0.26-0.26h0.72727 0.72727v-0.26-0.26h2.1818 2.1818v0.26 0.26h0.72727 0.72727v0.26 0.26h0.36364 0.36364v0.26 0.26h0.36363 0.36362v0.78 0.78h-0.72725-0.72728v-0.26-0.26h-0.36363-0.36364v-0.52-0.52h-0.72727-0.72727v-0.26-0.26h-1.4546-1.4545v0.26 0.26h-0.72728-0.72727v1.04 1.04h0.72727 0.72727v0.26 0.26h1.4546 1.4546v0.26 0.26h1.0909 1.0909v0.26 0.26h0.72728 0.72725v0.52 0.52h0.3637 0.3636v1.04 1.04h-0.3636-0.3637v0.26 0.26h-0.36362-0.36363v0.26 0.26h-0.36364-0.36364v0.26 0.26h-3.2727-3.2727v-0.26-0.26h-0.36364-0.36363v-0.26-0.26h-0.36364-0.36364v-0.26-0.26z" />
            <path d="m15.273 10.56h-1.4545-1.4546v-0.78-0.78h1.4546 1.4545v0.78 0.78z" />
            <path d="m14.546 22h-0.7273-0.7273v-4.68-4.68h0.7273 0.7273v4.68 4.68z" />
            <path d="m19.636 22h-1.0909-1.091v-4.68-4.68h1.091 1.0909v0.26 0.26h0.3636 0.3636v-0.26-0.26h0.7273 0.7273v-0.26-0.26h1.8182 1.8181v0.26 0.26h0.3637 0.3636v0.26 0.26h0.3637 0.3636v0.26 0.26h0.3636 0.3637v-0.26-0.26h0.3636 0.3636v-0.26-0.26h0.7273 0.7273v-0.26-0.26h1.8182 1.8181v0.26 0.26h0.3637 0.3636v0.26 0.26h0.3637 0.3636v0.26 0.26h0.3636 0.3637v4.16 4.16h-0.7273-0.7273v-3.38-3.38h-0.3636-0.3637v-0.78-0.78h-0.3636-0.3636v-0.26-0.26h-1.4546-1.4545v0.26 0.26h-0.7273-0.7273v0.52 0.52h-0.3636-0.3636v3.64 3.64h-1.0909-1.091v-4.16-4.16h-0.3636-0.3636v-0.26-0.26h-1.4546-1.4545v0.26 0.26h-0.7273-0.7273v0.52 0.52h-0.3636-0.3636v3.64 3.64z" />
            <path d="m54.546 22h-0.7273-0.7273v-4.68-4.68h0.7273 0.7273v0.52 0.52h0.3636 0.3636v-0.26-0.26h0.3637 0.3636v-0.26-0.26h0.7273 0.7272v-0.26-0.26h1.8182 1.8182v0.26 0.26h0.7273 0.7273v0.26 0.26h0.3636 0.3636v1.04 1.04h0.3637 0.3636v3.38 3.38h-1.0909-1.0909v-3.9-3.9h-0.3637-0.3636v-0.26-0.26h-0.3636-0.3637v-0.26-0.26h-1.4545-1.4546v0.26 0.26h-0.7272-0.7273v0.26 0.26h-0.3636-0.3637v0.52 0.52h-0.3636-0.3636v3.38 3.38z" />
            <path d="m38.182 19.4h0.3637v0.52 0.52h0.3636 0.3636v0.26 0.26h0.3637 0.3636v0.26 0.26h0.7273 0.7272v0.26 0.26h2.9091 2.9091v-0.26-0.26h0.3637 0.3636v-0.26-0.26h0.3636 0.3637v-0.26-0.26h0.3636 0.3636v-0.26-0.26h0.3637 0.3636v-1.04-1.04h0.3637 0.3636v-0.78-0.78h-0.3636-0.3637v-0.78-0.78h-0.3636-0.3637v-0.52-0.52h-0.3636-0.3636v-0.26-0.26h-0.3637-0.3636v-0.26-0.26h-0.7273-0.7272v-0.26-0.26h-2.1819-2.1818v0.26 0.26h-0.7273-0.7272v0.26 0.26h-0.7273-0.7273v0.52 0.52h-0.3636-0.3636v0.52 0.52h-0.3637-0.3636v2.08 2.08h0.3636zm1.8182-3.12h-0.3636-0.3637v0.78 0.78h0.3637 0.3636v0.78 0.78h0.3636 0.3637v0.52 0.52h0.3636 0.3636v0.26 0.26h2.5455 2.5455v-0.26-0.26h0.3636 0.3636v-0.26-0.26h0.3637 0.3636v-0.52-0.52h0.3636 0.3637v-1.82-1.82h-0.3637-0.3636v-0.52-0.52h-0.3636-0.3637v-0.26-0.26h-0.7272-0.7273v-0.26-0.26h-1.4546-1.4545v0.26 0.26h-0.7273-0.7273v0.26 0.26h-0.3636-0.3636v0.26 0.26h-0.3637-0.3636v0.78 0.78z" clip-rule="evenodd"  fill-rule="evenodd"/>
          </svg>


          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
