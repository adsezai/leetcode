/**
 * 811 Subdomain Visit Count
 * easy
 * hash
 **/

/**
 * create a hasMap for every domain, inc number of every subdomain
 */
var subdomainVisits = function (cpdomains) {
  const hash = {}

  for (const entry of cpdomains) {
    let [count, domain] = entry.split(' ')
    count = parseInt(count)

    const domainArr = domain.split('.').reverse()
    const subdomain = []
    for (let i = 0; i < domainArr.length; i++) {
      subdomain.push(domainArr[i])
      const rightOrder = [...subdomain].reverse().join('.')
      if (!hash[rightOrder]) hash[rightOrder] = 0
      hash[rightOrder] += count
    }
  }

  return Object.entries(hash).map(([key, value]) => `${value} ${key}`)
}
