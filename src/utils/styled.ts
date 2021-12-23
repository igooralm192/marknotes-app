import React from 'react'

export function styled<T>(Component: React.FC<T>, props?: Partial<T>) {
  return function (newProps: T) {
    return React.createElement<T>(Component, { ...props, ...newProps })
  }
}
