// import { IDictionary, epoch } from "common-types";
// import { Model, belongsTo, fk, index, max, min, mock, model, property } from "firemodel";

// export function isWeightPriced(pricing?: IPosPricing): pricing is IPosPricingWeighted {
//   return pricing && pricing.pricingType === "weighted" ? true : false;
// }

// export function isSimplePriced(pricing?: IPosPricing): pricing is IPosPricingSimple {
//   return pricing && pricing.pricingType === "simple" ? true : false;
// }

// export type IPricingType =
//   /** Pricing is not based on any product attributes */
//   | "simple"
//   /** Pricing is based on the weight of the produ gt */
//   | "weighted"
//   /** forumula is based on a bespoke formula */
//   | "bespoke";
// export type IUom = "g" | "oz";
// export interface IPosPricingBase {
//   pricingType: IPricingType;
// }

// export interface IPosPricingSimple extends IPosPricingBase {
//   pricingType: "simple";
//   price: number;
// }

// export interface IPosWeightedPrice {
//   weight: number;
//   uom: IUom;
//   price: number;
//   descriptiveName: string;
// }

// export interface IPosPricingWeighted extends IPosPricingBase {
//   pricingType: "weighted";
//   prices: IPosWeightedPrice[];
// }

// export interface IPosPricingBespoke extends IPosPricingBase {
//   pricingType: "bespoke";
//   forumulaPricing: (product: PosProduct) => number;
// }

// export type IPosPricing = IPosPricingSimple | IPosPricingWeighted | IPosPricingBespoke;

// @model({ dbOffset: "/POS/:dispensary" })
// export class PosProduct extends Model {
//   @property @mock("uuid") posId!: string;
//   @property @mock("companyName") posVendorName!: string;
//   @property @mock("random") name!: string;
//   @property @mock("paragraph") description!: string;

//   // TODO: @mock('Boolean') does not work, fake values are `lorem-ipsum` strings
//   // change it back to 'Boolean', when it is in working state
//   @property @mock("random", [true, false]) hasThc?: boolean;
//   @property @mock(() => {}) compoundWeights?: IDictionary;
//   /**
//    * The ratio of THC to CBD is often used as a simple guide
//    * to the product's impact and use cases
//    */
//   @property thcCbdRatio?: IDictionary;
//   /** what root stock did the product's plant come from */
//   @property rootStock?: string;
//   /**
//    * The qualitative effects that this product is expected to have on customers
//    */
//   @property @mock("sentence") effects?: IDictionary<number>;

//   @property pricing?: IDictionary;
//   /**
//    * The primary category name
//    */
//   @property @index category!: string | "";
//   @property @index subCategory?: string | "";

//   /**
//    * Even though we want the category/sub-category schema
//    * to do most of the major product grouping we still will
//    * find some products fit into a category/sub-category but
//    * they may _also_ be worth listing as an accessory
//    */
//   @property @mock("random", false, false, false, true) alsoConsiderAsAccessory?: boolean;

//   /**
//    * A full list of category, sub-category, and possibly other etraneous
//    * word-level attributes/tags which are connected to the product
//    */
//   @property categoryTags!: string[];
//   /**
//    * The brand/company who is selling the product
//    */
//   @property brand?: string;
//   /**
//    * in some cases, a brand has different "lines" or "sub-brands"
//    * under the master brand. For example, PAX sells a lot accessories
//    * but they have a sub-brand called ERA which is where a lot of their
//    * business is currently
//    */
//   @property subBrand?: string;
//   /** The strain name. */
//   @property strain?: string;
//   @property posUpdatedAt!: epoch;
//   @property @mock(() => []) productImages!: IDictionary[];
//   /**
//    * not used in MVP but indicates whether product data is available
//    * in the MOVE "Universal Catalog"
//    */
//   @property universalCatalog?: fk;
//   @property usesUniversalImages?: boolean;
//   @property usesUniversalMeta?: boolean;

//   @property @mock(() => true) availableOnline!: boolean;

//   /**
//    * This level is used to tell when an item is out of stock
//    */
//   @property parLevel?: number;

//   @belongsTo("PartnerDispensary") dispensary!: fk;
//   /**
//    * allows mapping a POS Product to a "Universal" product
//    *
//    * **not for MVP**
//    */
//   @belongsTo("Product") universalProduct?: fk;
// }
