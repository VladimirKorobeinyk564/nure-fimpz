import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import CodeSnippet from "@/components/common/code-snippet/code-snippet";
import {python} from "@codemirror/lang-python";
import {useTranslation} from "react-i18next";

const TermsOfUse = () => {
    const {t} = useTranslation();

    const code = `from contracts import contract, new_contract
 
new_contract('str_len_gt_zero', lambda s: isinstance(s, str) and len(s)>0)
 
class Person:
   @contract(
       name='str_len_gt_zero',
       age='int,>0',
       weight='int,>0'
   )
   def __init__(self, name, age, weight):
       self.name = name
       self.age = age
       self.weight = weight
       self.countries = []
 
   @contract(returns='str_len_gt_zero')
   def __str__(self):
       return f"{self.name} ({self.age}yo, {self.weight:.2f}kg)"
 
   @property
   @contract(returns='float,>0')
   def get_weight(self):
       return float(self.weight)
 
   @contract(kgs='float|int,>0', returns='str')
   def add_weight(self, kgs):
       self.weight += kgs
       return f"{self.name} is now {self.weight:.2f}kgs."
 
   @contract(country='str|list[>0](str)')
   def add_country(self, country):
       if type(country) == str:
           self.countries.append(country) if country not in self.countries else None
       elif type(country) == list:
           for item in country:
                self.countries.append(item) if item not in self.countries else None
       else:
           raise ValueError("Wrong type of country. Only strings and lists are available.")
  
   @property
   @contract(returns='str_len_gt_zero')
   def get_countries(self):
       if self.countries:
           return f"{self.name} already visited: {' '.join(self.countries)}."
       else:
           return f"{self.name} hasn't visited any country yet."
 
 
person_1 = Person("John Wick", 39, 78.3)
person_1.add_weight(2)
print(person_1.get_weight)
print(person_1)
print(person_1.get_countries)
person_1.add_country(["Spain", "France", "Brazil", False])
 
 
person_2 = Person("", 22, 71)
person_2.add_weight(0)
print(person_2.get_weight)
print(person_2)
person_2.add_country("Italy")
person_2.add_country([""])
print(person_2.get_countries)`;

    const code1 = `# docstrings
@contract
def add_weight(self, kgs):
""" Add weight in kilos to Person.
:type kgs: float|int,>0
:rtype: str
"""
self.weight += kgs
return f"{self.name} is now {self.weight:.2f}kgs."
# annotations
@contract
def add_weight(self, kgs='float|int,>0') -> "str":
self.weight += kgs
return f"{self.name} is now {self.weight:.2f}kgs."`
    return (
        <MethodologySection title={t('docsPage.menuTree.other.pythonLesson.testing')}
                            id={"termsOfUse"} isFirstSection={false}>
            <p>{t('docsPage.content.other.pythonLesson.testing.p1')}</p>
            <CodeSnippet lang={[python()]} title={t('docsPage.content.other.pythonLesson.testing.code1')}>
                {code}
            </CodeSnippet>
            <p>{t('docsPage.content.other.pythonLesson.testing.p2')} <a href={"https://gist.github.com/HoloborodkoBohdan/b59a02abcaf06c4f8dd9d325160903ce"} className={"text-primary-color"}>gist.github.com</a>.</p>
            <p>{t('docsPage.content.other.pythonLesson.testing.p3')}</p>
            <CodeSnippet lang={[python()]} title={t('docsPage.content.other.pythonLesson.testing.code2')}>
                {code1}
            </CodeSnippet>
            <p>{t('docsPage.content.other.pythonLesson.testing.p4')}</p>
        </MethodologySection>
    );
};

export default TermsOfUse;