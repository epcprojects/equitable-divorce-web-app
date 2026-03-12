"use client"
import * as Accordion from "@radix-ui/react-accordion"
import { ArrowDownIcon } from "@/public/icons"

const ITEMS = [
  {
    title: ' What is an Equitable Divorce?',
    content:
      'An equitable divorce is a legal process that aims to ensure a fair distribution of assets, responsibilities, and custody while prioritizing cooperation and fairness between divorcing parties. It focuses on preserving family unity and minimizing conflict.',
  },
  {
    title: 'How can Equitable Divorce help my family during divorce?',
    content:
      'Equitable Divorce offers a range of resources, including legal guidance, emotional support, and co-parenting advice, to help your family navigate the divorce process while maintaining a sense of togetherness and fairness.',
  },
  {
    title: 'Is Equitable Divorce the same as amicable divorce?',
    content:
      'While they share similarities, an equitable divorce emphasizes fairness and equity in all aspects, whereas an amicable divorce primarily focuses on minimizing conflict and maintaining a friendly relationship. Equitable divorce goes a step further in ensuring a balanced outcome.',
  },
   {
    title: ' Can I use Equitable Divorce even if my divorce is already contentious?',
    content:
      "Absolutely. Our resources and support are designed to help families at all stages of divorce, whether you're just starting or have encountered challenges along the way. We're here to assist in fostering a more equitable and harmonious process.",
  },
  {
    title: 'Are the resources on Equitable Divorce applicable to my jurisdiction?',
    content:
      "While we strive to provide general guidance, divorce laws and regulations can vary by jurisdiction. It's important to consult with a local attorney for specific legal advice tailored to your situation. Our website can still offer valuable insights and strategies applicable in many contexts.",
  },
   {
    title: 'How do I get involved with the Equitable Divorce community?',
    content:
      "Joining our community is simple. You can participate in discussions on our forums, share your own experiences and advice, or simply explore our educational resources. We encourage you to engage with our community to find support and solidarity during this challenging time.",
  },
]

export const FaqAccordion= () => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full space-y-2"
    >
      {ITEMS.map((item, index) => (
        <Accordion.Item key={index} value={`item-${index}`} className="border border-gray-200 rounded-sm overflow-hidden">
          <Accordion.Header>
            <Accordion.Trigger className="group flex justify-between items-center w-full p-4  text-left text-medium-gray text-lg data-[state=open]:text-purple-gray font-semibold">
              {item.title}
              <ArrowDownIcon className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:-rotate-180 shrink-0" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="px-4 faq-anim text-gray-600 overflow-hidden data-[state=open]:border-t data-[state=open]:border-gray-200">
            <div className="pt-4">{item.content}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}