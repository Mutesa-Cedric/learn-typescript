/*
Sometimes we need to represent a type for dictionaries, where values of a consistent type are retrievable by keys.

consider the following collection of phone numbers:

const phones = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
}

Clearly it seems that we can store phone numbers under a “key” — in this case home, office, fax, and possibly other words of our choosing — and each phone number is comprised of three strings.

We could describe this value using what’s called an index signature:
in example below , we used k as index signature
*/

const phones: {
    [k: string]: {
        country: string,
        area: string,
        number: string
    }
} = {}

phones.home={
    country:"+1",
    area:"211",
    number:"652-4515"
}