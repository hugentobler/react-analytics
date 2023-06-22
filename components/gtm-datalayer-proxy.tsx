'use client'

import { useState } from 'react'

declare global {
  interface Window {
    dataLayer: object[];
  }
}

export default function GTMDataLayerProxy() {
  const [dataLayer, setDataLayer] = useState<object[]>([])
  const toReversed = require('array.prototype.toreversed') // Array.toReversed() polyfill

  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || new Proxy([], {
      set: function(target: object[], property: PropertyKey, value: any) {
        target[property as any] = value
        console.log(`DataLayer changed:`, target)
        setDataLayer([...target])
        return Reflect.set(target, property, value)
      }
    })
  }

  return (
    <div className="p-1 fixed h-screen overflow-scroll">
      <a className="text-xs text-white float-right mb-2" href="https://github.com/hugentobler/react-analytics" target="_blank">View code &rarr;</a>
      <table className="min-w-full divide-y divide-zinc-400 font-mono text-xs text-white">
        <thead>
          <tr>
            <th scope="col" className="text-left px-2 py-1">
              Event
            </th>
            <th scope="col" className="text-left px-2 py-1">
              Element / Name
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-400">
          {dataLayer && (
            toReversed(dataLayer).map((e: any, i: number) => (
              <tr key={i}>
                <td className="px-2 py-1 break-words max-w-[6rem]">{e['event']}</td>
                <td className="px-2 py-1">
                  {e['gtm.element'] && (
                    <div className="max-h-12 overflow-hidden">
                      <span>{e['gtm.element'].localName}</span>
                      {typeof e['gtm.element'].className === 'string' && (
                        <span>.
                          {e['gtm.element'].className.replace(/ /g, '.',)}
                        </span>
                      )}
                    </div>
                  )}
                  {e['eventName'] && (
                    <span>{e['eventName']}</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
