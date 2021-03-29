import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6 bg-paleSky-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-0 lg:w-3/12">
            <h4 className="text-3xl font-semibold">TODO: Logo</h4>
          </div>
          <div className="w-full px-0 sm:px-4 lg:w-9/12">
            <div className="flex flex-wrap mx-auto mb-6 items-top">
              <div className="w-full px-0 py-4 md:w-3/12 lg:w-3/10 md:px-0">
                <span className="block mb-2 text-sm font-bold text-biscay-500">
                  Për ne
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900"
                      to="/"
                    >
                      Ballina
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900"
                      to="/rreth-nesh"
                    >
                      Rreth nesh
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900"
                      to="/projekte"
                    >
                      Projekte - Aktivitete
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full px-0 py-4 md:w-5/12 lg:w-3/10 md:px-0">
                <span className="block mb-2 text-sm font-bold text-biscay-500">
                  Kontakte
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900">
                      csno_zdravkocockovski@yahoo.com
                    </p>
                  </li>
                  <li></li>
                  <li>
                    <p className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900">
                      +389 (0) 46-831-625
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-full px-0 py-4 md:w-3/12 lg:w-4/10 md:px-0">
                <span className="block mb-2 text-sm font-bold text-biscay-500">
                  Lokacioni
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900">
                      1250 Dibër, <br className=" sm:visible md:invisible" />{" "}
                      Republic of North Macedonia
                    </p>
                  </li>
                  <li>
                    <p className="block pb-2 text-sm font-semibold text-paleSky-500 hover:text-paleSky-900">
                      <span className="font-black">GET DIRECTIONS</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-paleSky-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center">
            <div className="py-1 text-sm font-semibold text-biscay-500">
              Copyright © 2021 SHMK - 28 Nëntori Dibër <br />
              {/* <!-- <Link to="#" className="text-biscay-500 hover:">by-ag</Link>. --> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
