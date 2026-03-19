import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const ProgrammeAccordion = ({ data }) => {
const [openIndex, setOpenIndex] = useState(0);

const toggle = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<div className="space-y-6">

{data.map((item, index) => (
<div
key={index}
className="border rounded-lg bg-white dark:bg-gray-900"
>

<button
onClick={() => toggle(index)}
className="w-full flex justify-between items-center p-6 text-left"
>
<h3 className="text-xl font-semibold">{item.title}</h3>

{openIndex === index ? (
<Minus size={20} />
) : (
<Plus size={20} />
)}

</button>

{openIndex === index && (
<div className="px-6 pb-8 text-gray-600 dark:text-gray-400">
{item.content}
</div>
)}

</div>
))}

</div>
);
};

export default ProgrammeAccordion;